const request = require('request');

const nextISSTimesForMyLocation = (callback) => {};

const fetchMyIP = (cb) => {
  request('https://api.ipify.org?format=json', (err, res, body) => {
    if (err) {
      cb(err, null);
      return;
    }
    if (res.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body);
    cb(null, ip);
  });
};

const fetchCoordsByIP = (ip, cb) => {
  request(`https://ipvigilante.com/${ip}`, (err, res, body) => {
    if (err) {
      cb(err, null);
      return;
    }
    if (res.statusCode === 200) {
      const { latitude, longitude } = JSON.parse(body).data;
      cb(null, { latitude, longitude });
    } else {
      const msg = `Status Code ${res.statusCode} when fetching IP. Response: ${body}`;
      cb(Error(msg), null);
      return;
    }
  });
};

const fetchISSFlyOverTimes = (coords, cb) => {
  const { latitude, longitude } = coords;
  request(
    `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`,
    (err, res, body) => {
      if (err) {
        cb(err, null);
        return;
      }

      if (res.statusCode === 200) {
        const { response } = JSON.parse(body);
        cb(null, response);
      } else {
        const msg = `Status Code ${res.statusCode} when fetching IP. Response: ${body}`;
        cb(Error(msg), null);
        return;
      }
    }
  );
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
