const validate = require('express-validation');
const axios = require('axios');
const Joi = require('joi');
const util = require('util');

const response = require('../utils/response');
const auth = require('../utils/auth');

module.exports = [
  validate({
    body: {
      appId: Joi.string().required(),
    },
  }),
  async function requestToken(req, res, next) {
    console.debug('./requestToken', req.body);

    const { appId } = req.body;

    try {
      const { jwt, payload, callbackUrl } = await auth.getJWTData(appId);

      console.debug('requestToken:getJWTData', { jwt, payload, callbackUrl });

      await axios.post(
        callbackUrl,
        {
          jwt,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      response.createSuccessResponse(res, 200, {
        payload,
        message: `You've got jwt-token via callback url`,
      });
    } catch (err) {
      response.createErrorResponse(
        req,
        res,
        403,
        err.message,
        util.inspect(err),
      );
    }
  },
];
