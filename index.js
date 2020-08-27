const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('my ip is: ', ip);
});

fetchCoordsByIP('70.73.30.232', (err, data) => {
  if (err) {
    console.log("It didn't work!", err);
    return;
  }

  console.log('It worked! Returned data:', data);
});

const coordinates = { latitude: '51.03340', longitude: '-113.81870' };

fetchISSFlyOverTimes(coordinates, (err, data) => {
  if (err) {
    console.log("It didn't work!", err);
    return;
  }

  console.log('It worked! Returned flyover:', data);
});
