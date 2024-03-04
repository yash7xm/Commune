const CrudRepository = require("./crud-repository");
const { users } = require("../models");

class UserRepository extends CrudRepository {
  constructor() {
    super(users);
  }
}

module.exports = UserRepository;
