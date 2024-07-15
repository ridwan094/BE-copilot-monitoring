const logService = require('../services/logSummaryService');

class LogSummaryController {
  async getRangeData(req, res) {
    try {
      const { dateFrom, dateTo } = req.body;
      const result = await logService.getRangeData(dateFrom, dateTo);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new LogSummaryController();
