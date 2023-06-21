const { DataTypes } = require('sequelize');
const sequelize = require('./../../config/sequelize')
const bcrypt = require('bcrypt');

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

const User = sequelize.define('users', userSchema);

User.prototype.verifyPassword = async function (password) { 
    return await bcrypt.compare(password, this.passwordHash);
}

module.exports = User;
