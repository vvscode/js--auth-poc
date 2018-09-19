const createSuccessResponse = (response, code = 200, data = {}) =>
  response.status(code).json({
    status: 'success',
    data,
  });

const createFailResponse = (
  _request,
  response,
  code = 400,
  message = 'Bad Request',
  data = {},
  error = {},
) => {
  response.status(code).json({
    status: 'fail',
    message,
    data,
    error,
  });
};

const createErrorResponse = (
  _request,
  response,
  code = 500,
  message = 'Internal Server Error',
  error = {},
) => {
  response.status(code).json({
    status: 'error',
    message,
    error,
  });
};

module.exports = {
  createSuccessResponse,
  createErrorResponse,
  createFailResponse,
  createErrorResponse,
};
