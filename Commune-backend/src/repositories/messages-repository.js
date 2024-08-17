const CrudRepository = require("./crud-repository");
const { messages, users, channels } = require("../models");

class MessageRepository extends CrudRepository {
  constructor() {
    super(messages);
  }

  async getMessage(id) {
    const message = await messages.findByPk(id, {
      include: [
        {
          model: users,
          required: true,
          as: "userDetail",
        },
      ],
    });
    return message;
  }

  async getAllMessages(channelId) {
    const msgs = await messages.findAll({
      where: { channelId: channelId },
      include: [
        {
          model: users,
          required: true,
          as: "userDetail",
        },
      ],
    });
    return msgs;
  }
}

module.exports = MessageRepository;
