const { CrudRepository } = require(".");
const { user } = require("../models");

class UserRepository extends CrudRepository {
  constructor() {
    super(user);
  }
}

module.exports = UserRepository;
