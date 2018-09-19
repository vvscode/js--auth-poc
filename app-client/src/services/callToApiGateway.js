const fetch = require('node-fetch');
const services = require('../services');

const apiGateWayHost = `http://localhost:${process.env.PORT_GATEWAY}`;

module.exports = (serviceName) => {
  const jwt = services.jwt.get();
  const url = `${apiGateWayHost}/${serviceName}`;

  console.log(`Request to ${url} with ${jwt}`);

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
    .then(r => Promise.all([Promise.resolve(r.status), r.json()]))
    .then((data) => ({
      code: data[0],
      request: {
          url,
          headers: {
              Authorization: `Bearer ${jwt}`,
          }
      },
      response: data[1]
    }));
};
