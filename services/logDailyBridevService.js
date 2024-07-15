const xlsx = require('xlsx');
const moment = require('moment-timezone');
const userBridevRepository = require('../repositories/userBridevRepository');
const logDailyBridevRepository = require('../repositories/logDailyBridevRepository');

class LogDailyBridevService {
    async readExcel(filePath) {
        const workbook = xlsx.readFile(filePath);
        const errors = {};

        for (const sheetName of workbook.SheetNames) {
            if (!/^\d{2}-\d{2}-\d{4}$/.test(sheetName)) {
                errors[sheetName] = [`Sheet name "${sheetName}" does not match the required format.`];
                continue;
            }

        const worksheet = workbook.Sheets[sheetName];
        const jsonData = xlsx.utils.sheet_to_json(worksheet, { range: 1 });

        for (let i = 0; i < jsonData.length; i++) {
            const row = jsonData[i];
            console.log("row : ", row)
            const { Email, 'Jumlah Hit': jumlahHit, 'Last Activity': lastActivity } = row;

            if (!Email) {
            errors[sheetName] = errors[sheetName] || [];
            errors[sheetName].push(`Error row ${i + 1}: Email is empty.`);
            continue;
            }

            const user = await userBridevRepository.findByEmailWork(Email);
            if (!user) {
                errors[sheetName] = errors[sheetName] || [];
                errors[sheetName].push(`Error row ${i + 1}: Email "${Email}" is not registered.`);
            } else {
                if (lastActivity === '-') {
                    continue;
                }

                const timestamp = moment.tz(lastActivity, 'MMM D, YYYY @ HH:mm:ss.SSS', 'Asia/Jakarta').toDate();
                console.log(`Row ${i + 1}: Parsed timestamp:`, timestamp);

                if (isNaN(timestamp.getTime())) {
                    errors[sheetName] = errors[sheetName] || [];
                    errors[sheetName].push(`Error row ${i + 3}: Invalid date format "${lastActivity}".`);
                    continue;
                }
                const exists = await logDailyBridevRepository.exists(sheetName, user.id, timestamp);

                if (exists) {
                    errors[sheetName] = errors[sheetName] || [];
                    errors[sheetName].push(`Error row ${i + 1}: Data with sheet name "${sheetName}", Email "${Email}", and timestamp "${lastActivity}" already exists.`);
                } else {
                    await logDailyBridevRepository.create({
                    sheet_name: sheetName,
                    id_user_bridev: user.id,
                    jumlah_hit: jumlahHit,
                    timestamp
                    });
                }
            }
        }
        }

        return errors;
    }

    async getRangeData(dateFrom, dateTo) {
        try {
            const data = await logDailyBridevRepository.findDataByDate(dateFrom, dateTo);
    
            const extractedData = data.map(item => item.dataValues);
    
            const totalHit = extractedData.length;
    
            return { getData: extractedData, totalHit: totalHit };
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

module.exports = new LogDailyBridevService();
