const { DataTypes } = require('sequelize');
const sequelize = require('./../../config/sequelize')

const userSchema = {
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false 
      
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    passwordHash: {
        type: DataTypes.STRING,
        field: 'password_hash',
        allowNull: false
    }

 }

module.exports = sequelize.define("users", userSchema);