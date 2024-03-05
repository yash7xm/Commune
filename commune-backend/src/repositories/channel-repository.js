const CrudRepository = require("./crud-repository");
const { channels } = require("../models");

class ChannelRepository extends CrudRepository {
  constructor() {
    super(channels);
  }
}

module.exports = ChannelRepository;