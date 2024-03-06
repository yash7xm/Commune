const CrudRepository = require("./crud-repository");
const { messages } = require("../models");

class MessageRepository extends CrudRepository {
  constructor() {
    super(messages);
  }
}

module.exports = MessageRepository;
