const  LogDailyBridev = require('../models/logdailybridev');
const { Op } = require('sequelize');
const UserBridev = require('../models/userBridev');

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

    async findDataByDate(dateFrom, dateTo) {
        try {
          const data = await LogDailyBridev.findAll({
            where: {
              timestamp: {
                [Op.between]: [dateFrom, dateTo]
              }
            },
            include: [
              {
                model: UserBridev,
                attributes: ['name', 'email_work', 'email_brilian'] // Specify the columns you want to include
              }
            ]
          });
          return data;
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
    }

    async findDataSummaryByDate(dateFrom, dateTo) {
        try {
          return await LogDailyBridev.findAll({
            where: {
              timestamp: {
                [Op.between]: [dateFrom, dateTo]
              }
            },
            include: [
              {
                model: UserBridev,
                attributes: ['name', 'email_work', 'email_brilian']
              }
            ]
          });
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
    }
}

module.exports = new LogDailyBridevRepository();
