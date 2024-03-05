"use strict";
const { Model } = require("sequelize");
const { ChannelEnum } = require("../utils/common");
const { DM, GROUP, SELF } = ChannelEnum;
module.exports = (sequelize, DataTypes) => {
  class channels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  channels.init(
    {
      organization: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM,
        values: [DM, GROUP, SELF],
        defaultValue: DM,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "channels",
    }
  );
  return channels;
};
