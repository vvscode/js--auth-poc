const { Router } = require('express');

const checkJWT = require('./checkJWT');
const requestToken = require('./requestToken');
const notFound = require('./notFound');

const router = Router();

router.post('/auth/checkJWT', checkJWT);
router.post('/auth/requestToken', requestToken);
router.get('*', notFound);

module.exports = router;
