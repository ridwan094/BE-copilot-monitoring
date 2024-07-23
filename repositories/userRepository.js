const User = require('../models/user');

class UserRepository {
  async createUser(userData) {
    return User.create(userData);
  }

  async findUserByEmail(email) {
    return User.findOne({ where: { email } });
  }

  async findAllUsers() {
    return User.findAll({ include: 'Role' });
  }

  async findUserById(id) {
    return User.findByPk(id, { include: 'Role' });
  }

  async updateUser(id, userData) {
    const user = await User.findByPk(id);
    if (user) {
      return user.update(userData);
    }
    return null;
  }

  async deleteUser(id) {
    const user = await User.findByPk(id);
    if (user) {
      return user.destroy();
    }
    return null;
  }

  async updateLoginStatus(id, status) {
    const user = await User.findByPk(id);
    if (user) {
      return user.update({ is_login: status });
    }
    return null;
  }
}

module.exports = new UserRepository();
