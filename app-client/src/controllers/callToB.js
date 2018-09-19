const services = require('../services');
const responseCreator = require('../utils/response');

module.exports = (req, res) => {
    services
        .callToApiGateway('apiB')
        .then(services.handler(res))
        .catch((error) => responseCreator.createErrorResponse(res, 500, 'Fail to get data from microservice B ', { error }));
};