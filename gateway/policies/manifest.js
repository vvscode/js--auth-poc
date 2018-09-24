module.exports = {
  version: '1.0.0',
  init: function (pluginContext) {
    let policyAuth = require('./auth');
    pluginContext.registerPolicy(policyAuth);
  }
};
