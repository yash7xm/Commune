"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.messages, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      this.hasMany(models.membership, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }
  users.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 80],
        },
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
