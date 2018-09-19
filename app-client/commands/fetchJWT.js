const fetch = require('node-fetch');
const http = require('http');

const APP_PORT = 1111;
const appId = 'appClient123';
const authMsUrl = 'http://0.0.0.0:8081';

module.exports = (...params) => {
  Promise.all([
    fetch(`${authMsUrl}/auth/requestToken`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ appId }),
    })
      .then(r => r.json())
      .then(data => {
        console.log(
          "You'll get next permissions",
          JSON.stringify(data, null, 2),
        );
        return data;
      }),
    new Promise((resolve, reject) => {
      http
        .createServer(function(req, res) {
          let body = '';
          req.on('data', data => (body += data));

          req.on('end', () => {
            var post = JSON.parse(body);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('');
            setTimeout(() => {
              console.log(`Your jwt:`, post.jwt);
              resolve(post);
            }, 1000);
            require('fs').writeFileSync(
              'jwt.js',
              `
            module.exports = ${JSON.stringify(post, null, 2)};
            `,
            );
          });
        })
        .listen(APP_PORT);
    }),
  ]).then((payload, jwt) => {
    process.exit();
  });
};
