const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const UserBridev = require('./userBridev');

class LogDailyBridev extends Model {}

LogDailyBridev.init({
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
      model: UserBridev,
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
  sequelize,
  modelName: 'LogDailyBridev',
  tableName: 'LogDailyBridevs',
  timestamps: false
});

LogDailyBridev.belongsTo(UserBridev, { foreignKey: 'id_user_bridev' });

module.exports = LogDailyBridev;
