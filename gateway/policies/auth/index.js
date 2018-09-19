const axios = require('axios');

module.exports = {
  name: 'auth',
  policy: (actionParams) => {
    const { service } = actionParams;

    return (req, res, next) => {
      const { authorization } = req.headers;

      if (authorization) {
        const [ type, token ] = authorization.trim().split(' ');

        if (!type || !token) {
          res.status(403).json({
            status: "error",
            message: "You must provide authorization token",
          });
        }

        axios.post(`http://localhost:${process.env.PORT_AUTH}/auth/checkJWT`, { jwt: token })
          .then(function (res) {
            const data = res.data.data;

            if(!data.scope) {
              throw new Error("There is no scope of accessible services")
            }

            if (!data.scope.includes(service)) {
              throw new Error("You have no permissions to access service")
            }

            next();
          })
          .catch(function (error) {
            const message = error.response ? error.response.data.message : error.message;

            res.status(403).json({
              status: "error",
              message
            });
          })
      } else {
        res.status(403).json({
          status: "error",
          message: "You must send an authorization header",
        });
      }
    };
  }
};
