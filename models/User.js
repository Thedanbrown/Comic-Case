const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
    }
}

User.init(
{
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
        validate: {
            isEmail: true,
        }
    },

    firstname: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    lastname: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    dateofbirth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },

    acctcreatedate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
      }

},
{
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },
          beforeUpdate: async (updatedUserData) => {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
          },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
}
);

module.exports = User;