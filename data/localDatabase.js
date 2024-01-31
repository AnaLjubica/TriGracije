const bokeria=require('../assets/bokeria.jpg');
const matejuska=require('../assets/matejuska.jpg');
const procaffe =require('../assets/procaffe.jpg');
const lvxor=require('../assets/lvxor.jpg');
const dani=require('../assets/dani.jpg');
const ina=require('../assets/ina.jpg');
const omv=require('../assets/omv.jpg');
const festival=require('../assets/festival.jpg');
const ultra=require('../assets/ultra.jpg');
const heritage=require('../assets/heritage.jpg');
const park=require('../assets/park.jpg');
const diklecijan=require('../assets/diklecijan.jpg');
const cornaro=require('../assets/cornaro.jpg');
const san=require('../assets/san.jpg');
const crodux=require('../assets/crodux.jpg');
const tifon=require('../assets/tifon.jpg');

const localDatabase = {
    categories: [
      {
        id: 1,
        name: 'Restaurants & Coffee Bars',
        places: [
          {
            id: 1,
            name: 'Bokeria Kitchen & Wine Bar',
            location: { latitude: 45.5071, longitude: 16.4367 },
            Image: bokeria,
          },
          {
            id: 2,
            name: 'Konoba Matejuška',
            location: { latitude: 43.5062, longitude: 16.4401 },
            Image: matejuska, 
        },
          {
            id: 3,
            name: 'Kavana Procaffe',
            location: { latitude: 43.5081, longitude: 16.4397 },
           Image: procaffe,
        },
          {
            id: 4,
            name: 'Lvxor Café Bar',
            location: { latitude: 43.5068, longitude: 16.4406 },
            Image: lvxor,
        },
        ],
      },
      {
        id: 2,
        name: 'Accommodation',
        places: [
          {
            id: 5,
            name: 'Diocletians Palace Hostel',
            location: { latitude: 43.5081, longitude: 16.4397 },
            Image: diklecijan, 
        },
          {
            id: 6,
            name: 'Hotel Park Split',
            location: { latitude: 43.5110, longitude: 16.4393 },
            Image: park, 
        },
          {
            id: 7,
            name: 'Heritage Hotel 19',
            location: { latitude: 43.5090, longitude: 16.4384 },
            Image: heritage, 
        },
          {
            id: 8,
            name: 'Cornaro Hotel',
            location: { latitude: 43.5115, longitude: 16.4377 },
           Image: cornaro,
        },
        ],
      },
      {
        id: 3,
        name: 'Events',
        places: [
          {
            id: 9,
            name: 'Ultra Europe Music Festival',
            location: { latitude: 43.5153, longitude: 16.4673 },
            Image: ultra,
        },
          {
            id: 10,
            name: 'Split Film Festival',
            location: { latitude: 43.5127, longitude: 16.4383 },
            Image:festival,
        },
          {
            id: 11,
            name: 'Days of Diocletian',
            location: { latitude: 43.5081, longitude: 16.4397 },
            Image: dani,
        },
          {
            id: 12,
            name: 'San Sustipanske Noći',
            location: { latitude: 43.5108, longitude: 16.4477 },
            Image: san,
        },
        ],
      },
      {
        id: 4,
        name: 'Gas Stations',
        places: [
          {
            id: 13,
            name: 'INA Gas Station',
            location: { latitude: 43.5151, longitude: 16.4425 },
            Image: ina,
        },
          {
            id: 14,
            name: 'Tifon Gas Station',
            location: { latitude: 43.5122, longitude: 16.4408},
            Image: tifon,
        },
          {
            id: 15,
            name: 'Crodux Gas Station',
            location: { latitude: 43.5087, longitude: 16.4433 },
            Image: crodux,
        },
          {
            id: 16,
            name: 'OMV Gas Station',
            location: { latitude: 43.5115, longitude: 16.4542 },
            Image: omv,
        },
        ],
      },
    ],
  };
  
  export default localDatabase;
  