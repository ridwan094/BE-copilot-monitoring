const express = require('express');
const logCopilotController = require('../controllers/logCopilotController');
const router = express.Router();
const multer = require('multer');
const authMiddleware = require('../middlewares/authMiddleware');

const upload = multer({ dest: 'uploads/log-copilot/' });

router.post('/log-copilot', upload.single('file'), logCopilotController.bulkInsertLogs);
router.get('/log-copilot/data', logCopilotController.getRangeData);

module.exports = router;
