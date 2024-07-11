const logCopilotRepository = require('../repositories/logCopilotRepository');
const xlsx = require('xlsx');
const fs = require('fs');
const moment = require('moment-timezone');
const userBridevRepository = require('../repositories/userBridevRepository');

class LogCopilotService {
    async readExcel(filePath) {
        try {
            const workbook = xlsx.readFile(filePath);
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const excelData = xlsx.utils.sheet_to_json(worksheet);
            fs.unlinkSync(filePath);
            
            const formattedData = [];
            const errorData = [];
            for (let i = 0; i < excelData.length; i++) {
                const { timestamp, actor, external_identity_username } = excelData[i];

                console.log("timestamp : ", timestamp);
                const unixTimestamp = timestamp / 1000;

                const jakartaTimestamp = moment.unix(unixTimestamp).tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss');

                console.log("Jakarta Date-Time:", jakartaTimestamp);

                if (!external_identity_username) {
                    formattedData.push({
                        id_user_bridev: 9,
                        actor: actor,
                        timestamp: jakartaTimestamp
                    });
                    // errorData.push(`Error Row ${i + 1} : Email kosong, menggunakan id_user_bridev 0`);
                } else {
                    const user = await userBridevRepository.findByEmailBrilian(external_identity_username);
                    if (user) {
                        formattedData.push({
                            id_user_bridev: user.id,
                            actor: actor,
                            timestamp: jakartaTimestamp
                        });
                    } else {
                        errorData.push(`Error Row ${i + 1} : Email ${external_identity_username} belum ada di daftar User Bridev`);
                    }
                }
            }
    
            return { formattedData, errorData };
        } catch (error) {
            throw error;
        }
    }

    async createLogCopilot(userId, actor, timestamp) {
        return await logCopilotRepository.create(userId, actor, timestamp);
    }
}

module.exports = new LogCopilotService();