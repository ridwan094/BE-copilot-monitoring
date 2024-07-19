const LogCopilot = require('../models/logCopilot');
const { Op } = require('sequelize');
const UserBridev = require('../models/userBridev');
const Suspect = require('../models/suspect');
const moment = require('moment');

class LogCopilotRepository {
    async create(userId, actor, timestamp) {
        return await LogCopilot.create({ id_user_bridev: userId, actor, timestamp });
    }

    async bulkCreate(data) {
        return await Suspect.bulkCreate(data);
    }

    async findAll() {
      return await Suspect.findAll({
        order: [['createdAt', 'DESC']] // Sorts by 'created_at' in descending order
      });
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
      console.log("date from : ", dateFrom);
      console.log("date to : ", dateTo);
      
      const endOfDay = moment(dateTo).endOf('day').toDate();
      // const adjustedDateTo = moment(dateTo).subtract(1, 'days').toDate();
      
      // console.log("date to : ", adjustedDateTo);

        try {
            return await Suspect.findAll({
                where: {
                    createdAt: {
                    [Op.between]: [dateFrom, endOfDay]
                    }
                }
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

module.exports = new LogCopilotRepository();
