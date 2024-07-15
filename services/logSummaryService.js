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
            const date = log.timestamp.toISOString().split('T')[0];
            if (!acc[date]) acc[date] = [];
            acc[date].push(log);
            return acc;
          }, {});
    
          const suspectData = [];
          const notSuspectData = [];
    
          Object.keys(copilotDataMap).forEach(date => {
            copilotDataMap[date].forEach(copilotLog => {
              const dailyLogs = dailyDataMap[date] || [];
              const found = dailyLogs.find(dailyLog => dailyLog.id_user_bridev === copilotLog.id_user_bridev && dailyLog.timestamp.getDate() === copilotLog.timestamp.getDate());
              if (found) {
                notSuspectData.push({
                  date,
                  user: copilotLog.UserBridev,
                  totalHit: copilotLog.actor ? 1 : 0
                });
              } else {
                suspectData.push({
                  date,
                  user: copilotLog.UserBridev,
                  totalHit: copilotLog.actor ? 1 : 0
                });
              }
            });
          });
    
          return {
            logDaily: dailyDataMap,
            logCopilot: copilotDataMap,
            totalSuspect: suspectData.length,
            totalNotSuspect: notSuspectData.length,
            suspectData,
            notSuspectData
          };
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
    }
}

module.exports = new LogSummaryService();
