const WhitelistUser = require('../models/whitelistuser');

class WhitelistUserRepository {
    async create(data) {
        return await WhitelistUser.create(data);
    }

    async findByEmail(email) {
        return await WhitelistUser.findOne({ where: { email_work: email } });
    }
}

module.exports = new WhitelistUserRepository();
