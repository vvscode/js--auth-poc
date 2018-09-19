const services = require('../services');
const responseCreator = require('../utils/response');

module.exports = (req, res) => {
        services.getToken()
        .then(({ code, request, response }) => {
            services.handler(res)({
                code,
                request,
                response: {
                    main: response,
                    jwt: services.jwt.get()
                }
            });
        })
        .catch((error) => responseCreator.createErrorResponse(res, 500, 'Fail to get token ', { error }));

};