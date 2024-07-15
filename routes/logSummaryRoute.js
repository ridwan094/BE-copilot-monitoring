const express = require('express');
const logController = require('../controllers/logSummaryController');

const router = express.Router();

router.post('/get-summary-data', logController.getRangeData);

module.exports = router;
