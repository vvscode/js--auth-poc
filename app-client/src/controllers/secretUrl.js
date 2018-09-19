const jwt = require('../services').jwt;

module.exports = (req, res) => {
    let body = '';
    req.on('data', data => (body += data));

    req.on('end', () => {
        var post = JSON.parse(body);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('');

        jwt.save(post.jwt);
    });
};