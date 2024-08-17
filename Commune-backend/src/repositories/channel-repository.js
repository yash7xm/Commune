const CrudRepository = require("./crud-repository");
const { channels } = require("../models");

class ChannelRepository extends CrudRepository {
  constructor() {
    super(channels);
  }

  async getUserByChannelName(channelName) {
    const channel = await channels.findOne({ where: { name: channelName } });
    return channel;
  }
}

module.exports = ChannelRepository;
