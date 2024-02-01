const fs = require('fs');
const { execSync } = require('child_process');

console.log('Cleaning up old files');

//handling csvs folder
if (fs.existsSync('./csv')) fs.rmSync('./csv', { recursive: true, force: true });
fs.mkdirSync('./csv');

const zipsToExtract = fs.readdirSync('./zip');

zipsToExtract.forEach(async (zipName, i) => {
  const feed = zipName.replace('.zip', '');

  try {
    console.log(`Unzipping feed...`);
    execSync(`unzip -o ./zip/${feed}.zip -d ./csv`);
    console.log(`Unzipped ${feed} to ./csv`);
  } catch (e) {
    console.log(`Error unzipping ${feed}`);
    fs.rmSync(`./csv/${feed}`, { recursive: true, force: true }); //remove empty folder
  }
})