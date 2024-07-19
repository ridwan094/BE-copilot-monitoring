const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Suspects = sequelize.define('Suspect', {
  no: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email_work: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  email_bri: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Suspects;
