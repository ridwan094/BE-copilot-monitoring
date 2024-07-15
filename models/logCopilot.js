const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const UserBridev = require('./userBridev');

class LogCopilot extends Model {}

LogCopilot.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
  actor: {
    type: DataTypes.STRING,
    allowNull: true
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'LogCopilot',
  tableName: 'LogCopilots',
  timestamps: false
});

LogCopilot.belongsTo(UserBridev, { foreignKey: 'id_user_bridev' });

module.exports = LogCopilot;
