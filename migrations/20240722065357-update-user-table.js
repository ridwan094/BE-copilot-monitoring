'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'role_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Roles',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
    
    await queryInterface.addColumn('Users', 'is_login', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });

    await queryInterface.removeColumn('Users', 'role');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'role', {
      type: Sequelize.STRING,
      allowNull: false
    });

    await queryInterface.removeColumn('Users', 'role_id');
    await queryInterface.removeColumn('Users', 'is_login');
  }
};
