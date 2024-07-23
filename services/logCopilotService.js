const logCopilotRepository = require('../repositories/logCopilotRepository');
const xlsx = require('xlsx');
const fs = require('fs');
const moment = require('moment-timezone');
const userBridevRepository = require('../repositories/userBridevRepository');
const whitelistUserRepository = require('../repositories/whitelistUserRepository');

class LogCopilotService {
    async readExcel(filePath) {
        console.log("file path : ", filePath);
        try {
            const workbook = xlsx.readFile(filePath);
            const sheetNames = workbook.SheetNames;
            const formattedData = [];
            const errorData = [];
    
            // Check if file exists before unlinking
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            } else {
                console.warn(`File not found: ${filePath}`);
            }
    
            for (const sheetName of sheetNames) {
                const worksheet = workbook.Sheets[sheetName];
                const excelData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    
                for (let i = 2; i < excelData.length; i++) {
                    const row = excelData[i];
                    console.log("row : ", row);
    
                    if (row[0] === "Total Hit" && row[1] === undefined) {
                        continue;
                    }
    
                    // Check if the row is empty and move to the next sheet
                    if (row.every(cell => cell === undefined)) {
                        break;
                    }
    
                    const email = row[0];
                    const emailWork = row[1];
                    const hit = row[2];
                    const timestamp = row[5];
                    const get_timestamp_code = row[3];
                    const notes = row[6];
                    const checkBridev = row[7];
                    const checkBridevLowerCase = checkBridev ? checkBridev.toLowerCase() : "";
                    console.log("timestamp code : ", get_timestamp_code);
                    const save_convert_utc_timestamp = moment(get_timestamp_code).tz('UTC').format();
                    
                    console.log("converting to utc timestamp : ", save_convert_utc_timestamp);
                    const emailToCheck = emailWork || email;
                    const isWhitelisted = await whitelistUserRepository.findByEmail(emailToCheck);
                    if (!isWhitelisted) {
                        if (emailWork) {
                            const checkEmailWork = await userBridevRepository.findByEmailWork(emailWork);
                            
                            if (checkBridevLowerCase == "tidak") {
                                formattedData.push({
                                    email_work: emailWork,
                                    email_bri: email,
                                    createdAt: timestamp,
                                    updatedAt: save_convert_utc_timestamp,
                                });
                            }
                            
                        } else if (email) {
                            const checkEmailBrilian = await userBridevRepository.findByEmailBrilian(email);
                            if (checkBridevLowerCase == "tidak") {
                                formattedData.push({
                                    email_bri: email,
                                    email_work: emailWork,
                                    createdAt: timestamp,
                                    updatedAt: save_convert_utc_timestamp,
                                });
                            }
                            
                        } else {
                            errorData.push(`Error Row ${i + 1} : Kedua email work dan email kosong.`);
                        }
                    }
    
                    
                }
            }
    
            return { formattedData, errorData };
        } catch (error) {
            throw error;
        }
    }
    
    async bulkInsertLogCopilots(data) {
        return await logCopilotRepository.bulkCreate(data);
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