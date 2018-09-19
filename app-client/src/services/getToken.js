const fetch = require('node-fetch');

const appId = 'appClient123';
const authMsUrl = `http://0.0.0.0:${process.env.PORT_AUTH}`;
const params = { appId };

module.exports = function() {
    const url = `${authMsUrl}/auth/requestToken`;

    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    })
    .then(r => Promise.all([Promise.resolve(r.status), r.json()]))
    .then((data) => {
        const jsonData = JSON.stringify(data, null, 2);

        console.log('You\'ll get next permissions', jsonData);

        return {
            code: data[0],
            request: {
                url,
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: params,
            },
            response: data[1]
        };
    });
};
