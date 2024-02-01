const fs = require('fs');
const Papa = require('papaparse');
const variants = require('../variants.json');

console.log(variants)

let routes = {};
let tripIdToRouteId = {};
let stopPairs = {};

try {
  console.log('Parsing routes')
  const readStream = fs.createReadStream('./csv/routes.txt');

  Papa.parse(readStream, {
    //delimiter: ',',
    header: true,
    transformHeader: (h) => h.trim(),
    transform: (v) => v.trim(),
    step: async (row) => {
      const route = row.data;

      routes[route.route_id] = {
        sName: route.route_short_name,
        lName: route.route_long_name,
        type: route.route_type,
        color: route.route_color, //routeColor on legacy shapes
        trips: {}
      }
    },
    complete: () => {
      console.log('Parsing trips')
      const readStream = fs.createReadStream('./csv/trips.txt');

      Papa.parse(readStream, {
        //delimiter: ',',
        header: true,
        transformHeader: (h) => h.trim(),
        transform: (v) => v.trim(),
        step: async (row) => {
          const trip = row.data;

          //console.log(trip)
        },
        complete: () => {
          console.log('Parsing stop times')
          const readStream = fs.createReadStream('./csv/stop_times.txt');

          Papa.parse(readStream, {
            //delimiter: ',',
            header: true,
            transformHeader: (h) => h.trim(),
            transform: (v) => v.trim(),
            step: async (row) => {
              //console.log(row);
            },
            complete: () => {
              console.log('Sorting/processing stop times')

              //do stuff
            }
          })
        }
      })
    }
  });

} catch (e) {
  console.log(`Error parsing csv for ${folder}`)
}