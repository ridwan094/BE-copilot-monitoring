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

    async getRangeData(req, res) {
        try {
            const dateFrom = req.body.dateFrom;
            console.log(dateFrom);
            const dateTo = req.body.dateTo;
            const {getData, totalHit} = await logService.getRangeData(dateFrom, dateTo);
            res.status(200).json({
                "data" : getData,
                "summary": {
                    "totalHit" : totalHit
                }
            });
        } catch(e) {
            res.status(500).json({"error" : e.message});
        }
    }
    async getAllData(req, res) {
        try {
          const log_data = await logService.getLogData();
          res.status(200).json(log_data);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new LogController();
