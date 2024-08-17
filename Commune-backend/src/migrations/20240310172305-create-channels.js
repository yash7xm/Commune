"use strict";
/** @type {import('sequelize-cli').Migration} */
const { ChannelEnum } = require("../utils/common");
const { DM, GROUP, SELF } = ChannelEnum;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("channels", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      organization: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM,
        values: [DM, GROUP, SELF],
        defaultValue: DM,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("channels");
  },
};
