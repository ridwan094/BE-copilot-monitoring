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
    
                let id_user_bridev;
                
                if (!external_identity_username) {
                    id_user_bridev = 9;
                } else {
                    const user = await userBridevRepository.findByEmailBrilian(external_identity_username);
                    
                    if (user) {
                        id_user_bridev = user.id;
                    } else {
                        errorData.push(`Error Row ${i + 1} : Email ${external_identity_username} belum ada di daftar User Bridev`);
                        continue;
                    }
                }
    
                // Pengecekan keberadaan data di tabel
                const isExist = await logCopilotRepository.isDataExist(id_user_bridev, jakartaTimestamp);
                if (isExist) {
                    errorData.push(`Error Row ${i + 1} : Data dengan id_user_bridev ${id_user_bridev} dan timestamp ${jakartaTimestamp} sudah ada`);
                } else {
                    formattedData.push({
                        id_user_bridev: id_user_bridev,
                        actor: actor,
                        timestamp: jakartaTimestamp
                    });
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

    async getLogData() {
        return await logCopilotRepository.findAll();
    }

    async getRangeData(dateFrom, dateTo) {
        try {
            const data = await logCopilotRepository.findDataByDate(dateFrom, dateTo);
    
            const extractedData = data.map(item => item.dataValues);
    
            const totalHit = extractedData.length;
    
            return { getData: extractedData, totalHit: totalHit };
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
    
}

module.exports = new LogCopilotService();