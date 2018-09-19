module.exports = {
  APPS: [
    {
      appId: 'appClient123',
      callbackUrl: 'http://localhost:8084/api/secretUrl',
      scope: ['moi', 'ded', 'apiA'],
    },
    {
      appId: 'jt1',
      callbackUrl: 'https://postman-echo.com/post',
      scope: ['apiA'],
    },
    {
      appId: 'jt2',
      callbackUrl: 'https://postman-echo.com/post',
      scope: ['apiB'],
    },
    {
      appId: 'jt3',
      callbackUrl: 'https://postman-echo.com/post',
      scope: ['apiA', 'apiB'],
    },
  ],
};
