const fs = require('fs');
const logService = require('../services/logDailyBridevService');

class LogController {
    async uploadExcel(req, res) {
        const filePath = req.file.path;

        try {
            const errors = await logService.readExcel(filePath);
            res.status(200).json({ message: 'File processed successfully.', errors });
        } catch (error) {
            console.error('Error processing file:', error);
            res.status(500).json({ error: `An error occurred while processing the file. Error : ${error}` });
        } finally {
            fs.unlinkSync(filePath);
        }
    }
}

module.exports = new LogController();
