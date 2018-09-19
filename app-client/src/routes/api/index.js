const express = require('express');
const router = express.Router();
const controllers = require('../../controllers');

router.get('/getToken', controllers.getToken);

router.get('/callToA', controllers.callToA);

router.get('/callToB', controllers.callToB);

router.post('/secretUrl', controllers.secretUrl);

router.get('/reset', controllers.reset);

module.exports = router;