const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Cache extends Model {}

Cache.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    sheet_cache: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    }
}, {
    sequelize,
    modelName: 'Cache',
    tableName: 'Caches',
    timestamps: true,
    underscored: true, // Use snake_case for column names
});

module.exports = Cache;
