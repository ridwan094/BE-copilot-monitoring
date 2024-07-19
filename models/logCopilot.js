// models/logCopilot.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LogCopilot extends Model {
    static associate(models) {
      // define association here
      LogCopilot.belongsTo(models.Cache, { foreignKey: 'cache_id', as: 'cache' });
      LogCopilot.belongsTo(models.UserBridev, { foreignKey: 'id_user_bridev', as: 'userBridev' });
    }
  }
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
        model: 'UserBridevs',
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
    },
    cache_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cache',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true
    },
    jumlah_hit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'LogCopilot',
    tableName: 'LogCopilots',
    timestamps: false
  });
  return LogCopilot;
};
