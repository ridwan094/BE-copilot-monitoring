const  LogDailyBridev = require('../models/logdailybridev');

class LogDailyBridevRepository {
    async create(logData) {
        return await LogDailyBridev.create(logData);
    }

    async exists(sheetName, userId, timestamp) {
        return LogDailyBridev.findOne({
            where: {
                sheet_name: sheetName,
                id_user_bridev: userId,
                timestamp: timestamp
            }
        });
    }
}

module.exports = new LogDailyBridevRepository();
