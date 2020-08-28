const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTime = (passTimes) => {
  for (const pass of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation().then((passTimes) => {
  printPassTime(passTimes);
});
//   .catch((err) => console.log("It didn't work: ", err.message));
