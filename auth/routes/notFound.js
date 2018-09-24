const { createFailResponse } = require('../utils/response');
module.exports = function notFoundController(req, res, next) {
  return createFailResponse(req, res, 404, 'Not Found');
};
