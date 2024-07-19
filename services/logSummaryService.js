const logDailyBridevRepository = require('../repositories/logDailyBridevRepository');
const logCopilotRepository = require('../repositories/logCopilotRepository');

class LogSummaryService {
    async getRangeData(dateFrom, dateTo) {
        try {
          const logDailyData = await logDailyBridevRepository.findDataSummaryByDate(dateFrom, dateTo);
          const logCopilotData = await logCopilotRepository.findDataSummaryByDate(dateFrom, dateTo);
    
          const dailyDataMap = logDailyData.reduce((acc, log) => {
            const date = log.timestamp.toISOString().split('T')[0];
            if (!acc[date]) acc[date] = [];
            acc[date].push(log);
            return acc;
          }, {});
    
          const copilotDataMap = logCopilotData.reduce((acc, log) => {
            const data = log
            if (!acc[data]) acc[data] = [];
            acc[data].push(log);
            return acc;
          }, {});
    
          const suspectData = [];
    
          Object.keys(copilotDataMap).forEach(date => {
            copilotDataMap[date].forEach(copilotLog => {
              suspectData.push({
                  date,
                  user: copilotLog.UserBridev,
                  totalHit: copilotLog.actor ? 1 : 0
                });
            });
          });
    
          return {
            logDaily: dailyDataMap,
            logCopilot: logCopilotData,
            totalSuspect: suspectData.length,
          };
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
    }
}

module.exports = new LogSummaryService();
