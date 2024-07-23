const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Hash password
    const hashedPassword = await bcrypt.hash('password', 10);

    await queryInterface.bulkInsert('Users', [
      {
        email: 'taufiq@gmail.com',
        password: hashedPassword,
        role_id: 1, // Assume 1 is the ID for 'Admin' role
        is_login: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'oktavian@gmail.com',
        password: hashedPassword,
        role_id: 1, // Assume 2 is the ID for 'User' role
        is_login: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'admin@gmail.com',
        password: hashedPassword,
        role_id: 2, // Assume 2 is the ID for 'User' role
        is_login: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    // Mengatur ulang sequence setelah menghapus data
    await queryInterface.sequelize.query('ALTER SEQUENCE "Users_id_seq" RESTART WITH 1;');
  }
};