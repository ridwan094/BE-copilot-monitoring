const UserBridev = require('../models/userBridev');

class UserBridevRepository {
  async create(user) {
    return await UserBridev.create(user);
  }

  async findAll() {
    return await UserBridev.findAll();
  }

  async findById(id) {
    return await UserBridev.findByPk(id);
  }

  async findByEmailWork(email_work) {
    return await UserBridev.findOne({
        where: {email_work: email_work}
    });
  }

  async findByEmailBrilian(email_brilian) {
    return await UserBridev.findOne({
        where: {email_brilian: email_brilian}
    });
  }

  async update(id, user) {
    return await UserBridev.update(user, {
      where: { id: id },
    });
  }

  async delete(id) {
    return await UserBridev.destroy({
      where: { id: id },
    });
  }
}

module.exports = new UserBridevRepository();
