const { Router } = require('express');

const checkJWT = require('./checkJWT');
const requestToken = require('./requestToken');
const notFound = require('./notFound');

const router = Router();

router.post('/checkJWT', checkJWT);
router.post('/requestToken', requestToken);
router.get('*', notFound);

module.exports = router;
