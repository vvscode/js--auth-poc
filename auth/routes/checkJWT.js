const validate = require('express-validation');
const Joi = require('joi');

const response = require('../utils/response');
const auth = require('../utils/auth');

module.exports = [
  validate({
    body: {
      jwt: Joi.string().required(),
    },
  }),
  async function(req, res, next) {
    console.debug('./checkJWT', req.body);
    const { jwt } = req.body;

    try {
      const jwtDecode = await auth.validateJWT(jwt);

      response.createSuccessResponse(res, 200, jwtDecode);
    } catch (err) {
      response.createErrorResponse(req, res, 403, err.message, err);
    }
  },
];
