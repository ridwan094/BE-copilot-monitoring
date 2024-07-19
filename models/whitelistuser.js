const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Sesuaikan path ke konfigurasi sequelize Anda

class WhitelistUser extends Model {}

WhitelistUser.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    email_work: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    }
}, {
    sequelize,
    modelName: 'WhitelistUser',
    tableName: 'whitelist_users', // Sesuaikan nama tabel
    timestamps: true, // Jika Anda menggunakan timestamps
});

module.exports = WhitelistUser;
