const responseCreator = require('../utils/response');

module.exports = (res) =>
    ({ code, request, response }) =>
        code === 200 ?
            responseCreator.createSuccessResponse(res, 200, { request, response }) :
            responseCreator.createFailResponse(res, code, response.message, { request, response });