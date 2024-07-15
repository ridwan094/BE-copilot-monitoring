const User = require('../models/user');

class UserRepository {
    async create(user) {
        return await User.create(user);
    }

    async findByEmail(email) {
        return await User.findOne({ where: { email } });
    }

    async updateIsLogin(id, is_login) {
        return await User.update({ is_login }, { where: { id } });
    }
}

module.exports = new UserRepository();
