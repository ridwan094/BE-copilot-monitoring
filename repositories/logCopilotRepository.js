const LogCopilot = require('../models/logCopilot');
const { Op } = require('sequelize');

class LogCopilotRepository {
    async create(userId, actor, timestamp) {
        return await LogCopilot.create({ id_user_bridev: userId, actor, timestamp });
    }

    async isDataExist(userId, date) {
        try {
            const result = await LogCopilot.findOne({
                where: {
                    id_user_bridev: userId,
                    timestamp: date
                }
            });
            return result !== null;
        } catch (error) {
            console.error('Error fetching data:', error);
            return error;
        }
    }

    async findDataByDate(dateFrom, dateTo) {
        try {
            const data = await LogCopilot.findAll({
                where: {
                    timestamp: {
                        [Op.between]: [dateFrom, dateTo]
                    }
                }
            });
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
    
}

module.exports = new LogCopilotRepository();
