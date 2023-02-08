const express = require('express');

const feedRoutes = require('./feed');

const router = express.Router();

router.use('/job-feed', feedRoutes);

module.exports = router;