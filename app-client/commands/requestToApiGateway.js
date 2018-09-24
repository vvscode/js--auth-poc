const fetch = require('node-fetch');
const config = require('../jwt');
const { jwt } = config;

const apiGateWayHost = 'http://localhost:8080';

module.exports = serviceName => {
  const url = `${apiGateWayHost}/${serviceName}`;
  console.log(`Request to ${url} with ${jwt}`);
  fetch(url, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
    .then(r => r.text())
    .then(data => console.log('Success request:', data))
    .catch(err => console.error('Err request', err));
};
