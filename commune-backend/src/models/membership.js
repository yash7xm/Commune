"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.channels, {
        foreignKey: "channelId",
        as: "channelDetail",
      });
      this.belongsTo(models.users, {
        foreignKey: "userId",
        as: "userDetail",
      });
    }
  }
  membership.init(
    {
      channelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "membership",
    }
  );
  return membership;
};
