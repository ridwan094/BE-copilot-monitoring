const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const UserBridev = require('./userBridev');

// Mendefinisikan model LogDailyBridev
const LogDailyBridev = sequelize.define('LogDailyBridev', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  sheet_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_user_bridev: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserBridev, // Pastikan model UserBridev sudah didefinisikan dan diekspor
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  jumlah_hit: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'LogDailyBridevs', // Nama tabel dalam database
  timestamps: false // Nonaktifkan timestamps jika tidak menggunakan createdAt dan updatedAt
});

// Menetapkan relasi antara model LogDailyBridev dan UserBridev
LogDailyBridev.belongsTo(UserBridev, { foreignKey: 'id_user_bridev' });

module.exports = LogDailyBridev;
