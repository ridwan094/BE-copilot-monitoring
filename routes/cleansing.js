const express = require('express');
const logCopilotController = require('../controllers/logCopilotController');
const router = express.Router();
const multer = require('multer');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/log-copilot', upload.single('file'), logCopilotController.bulkInsertLogs);
router.get('/log-copilot/data', logCopilotController.getRangeData);
router.get('/log-copilot/all-data', logCopilotController.getAllData);

module.exports = router;
