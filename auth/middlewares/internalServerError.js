const { createErrorResponse } = require('../utils/response');

module.exports = function internalServerError(err, req, res, next) {
  return createErrorResponse(req, res, 500, 'Internal Server Error', err);
};
