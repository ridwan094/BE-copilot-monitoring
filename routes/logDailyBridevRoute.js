const express = require('express');
const multer = require('multer');
const logController = require('../controllers/logDailyBridevController');

const router = express.Router();
const upload = multer({ dest: 'uploads/log-daily-bridev/' });

router.post('/log-daily-bridev', upload.single('file'), logController.uploadExcel);
router.get('/log-daily-bridev/data', logController.getRangeData);
router.get('/log-daily-bridev/all-data', logController.getAllData);

module.exports = router;
