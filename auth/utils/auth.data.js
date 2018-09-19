module.exports = {
  APPS: [
    {
      appId: 'appClient123',
      callbackUrl: 'http://localhost:1111/secretUrl',
      scope: ['moi', 'ded', 'api'],
    },
    {
      appId: 'jt1',
      callbackUrl: 'https://postman-echo.com/post',
      scope: ['api'],
    },
    {
      appId: 'jt2',
      callbackUrl: 'https://postman-echo.com/post',
      scope: ['api1'],
    },
    {
      appId: 'jt3',
      callbackUrl: 'https://postman-echo.com/post',
      scope: ['api', 'api1'],
    },
  ],
};
