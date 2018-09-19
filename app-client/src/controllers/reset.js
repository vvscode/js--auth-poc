const services = require('../services');
const responseCreator = require('../utils/response');

module.exports = (req, res) => {
    services.jwt.reset();
    responseCreator.createSuccessResponse(res, 200, { message: 'JWT is removed successfully' });
};