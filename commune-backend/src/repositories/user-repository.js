const CrudRepository = require("./crud-repository");
const { users } = require("../models");

class UserRepository extends CrudRepository {
  constructor() {
    super(users);
  }

  async getUserByUsername(username) {
    const user = await users.findOne({ where: { username: username } });
    return user;
  }
}

module.exports = UserRepository;
