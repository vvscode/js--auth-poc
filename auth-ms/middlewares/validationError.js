const expressValidation = require('express-validation');

const { createFailResponse } = require('../utils/response');

module.exports = function validationError(err, req, res, next) {
  if (err instanceof expressValidation.ValidationError) {
    // validation error contains errors which is an array of error each containing message[]
    const errorMessage = err.errors
      .map(error =>
        error.messages.reduce(
          (acc, message) => `${message} in ${error.location}. ${acc}`,
          '',
        ),
      )
      .join('');
    return createFailResponse(req, res, 400, errorMessage, {}, err);
  } else {
    next(err);
  }
};
