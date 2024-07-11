const logCopilotService = require('../services/logCopilotService');
const userBridevRepository = require('../repositories/userBridevRepository');

class LogCopilotController {
    async bulkInsertLogs(req, res) {
        try {
            const filePath = req.file.path;
            const { formattedData, errorData } = await logCopilotService.readExcel(filePath);
    
            for (let i = 0; i < formattedData.length; i++) {
                const { id_user_bridev, actor, timestamp } = formattedData[i];
    
                await logCopilotService.createLogCopilot(id_user_bridev, actor, timestamp);
            }
    
            if (errorData.length > 0) {
                res.status(400).json({ errors: errorData });
            } else {
                res.status(201).json({ message: 'All logs inserted successfully' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
    
}

module.exports = new LogCopilotController();
