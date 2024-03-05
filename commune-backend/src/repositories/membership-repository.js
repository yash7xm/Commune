const CrudRepository = require("./crud-repository");
const { memberships } = require("../models");

class UserRepository extends CrudRepository {
  constructor() {
    super(memberships);
  }

  async getByUserId(userId) {
    const user = await memberships.findOne({ where: { userId: userId } });
    return user;
  }
}

module.exports = UserRepository;
