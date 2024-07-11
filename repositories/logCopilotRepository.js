const LogCopilot = require('../models/logCopilot');

class LogCopilotRepository {
    async create(userId, actor, timestamp) {
        return await LogCopilot.create({ id_user_bridev: userId, actor, timestamp });
    }
}

module.exports = new LogCopilotRepository();
