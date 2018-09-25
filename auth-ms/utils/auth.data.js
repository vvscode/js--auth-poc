module.exports = {
  APPS: [
    {
      appId: 'appClient123',
      callbackUrl: 'http://localhost:1111/secretUrl',
      scope: ['moi', 'ded'],
    },
    {
      appId: 'jt1',
      callbackUrl: 'https://postman-echo.com/post',
      scope: ['moi', 'ded'],
    },
    {
      appId: 'jt2',
      callbackUrl: 'https://postman-echo.com/post',
      scope: ['moi'],
    },
    {
      appId: 'jt3',
      callbackUrl: 'https://postman-echo.com/post',
      scope: ['ded'],
    },
  ],
};
