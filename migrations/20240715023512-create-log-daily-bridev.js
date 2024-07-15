'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LogDailyBridevs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sheet_name: {
        type: Sequelize.STRING
      },
      id_user_bridev: {
        type: Sequelize.INTEGER,
        references: {
          model: 'UserBridevs',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      jumlah_hit: {
        type: Sequelize.INTEGER
      },
      timestamp: {
        type: Sequelize.DATE
      }
    }, {
      timestamps: false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('LogDailyBridevs');
  }
};
