const fs = require('fs');
const fetch = require('node-fetch');
// dot env
require('dotenv').config();

console.log('Cleaning up old files');

//handling zips folder
if (fs.existsSync('./zip')) fs.rmSync('./zip', { recursive: true, force: true });
fs.mkdirSync('./zip');

console.log('Old files cleaned up');

console.log('Downloading zip');
fetch('https://www.transitchicago.com/downloads/sch_data/google_transit.zip', {
  method: "GET",
  signal: AbortSignal.timeout(1800000) //30 minutes
})
  .then(
    (res) => {
      if (res.status !== 200) throw new Error('Error downloading zip');

      const dest = fs.createWriteStream(`./zip/cta.zip`)
      res.body.pipe(dest);
      res.body.on("end", () => {
        console.log('Finished downloading zip');
      });
    }
  )
  .catch(e => {
    console.log(e)
  })