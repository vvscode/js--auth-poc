const jwt = require('jsonwebtoken');
const util = require('util');

const jwtVerity = util.promisify(jwt.verify);
const jwtSign = util.promisify(jwt.sign);

const { APPS } = require('./auth.data');

const JWT_HEADER = {
  algorithm: 'HS256',
  expiresIn: '180d',
};

const JWT_SECRET = `${process.env.JWT_KEY}`;

const tokens = {};

function validateAppId(appId) {
  return Promise.resolve(APPS.some(el => el.appId === appId));
}

async function getJWTData(appId, expiresIn = 60 * 60 * 1000) {
  const app = APPS.find(el => el.appId === appId);
  if (!app) {
    throw new Error(`${appId} appId not registered`);
  }

  const JWT_PAYLOAD = { ...app };
  delete JWT_PAYLOAD.callbackUrl;

  const jwt = await jwtSign(JWT_PAYLOAD, JWT_SECRET, JWT_HEADER);

  return {
    jwt,
    payload: JWT_PAYLOAD,
    callbackUrl: app.callbackUrl,
  };
}

function validateJWT(token) {
  return jwtVerity(token, JWT_SECRET);
}

module.exports = {
  validateAppId,
  getJWTData,
  validateJWT,
};
