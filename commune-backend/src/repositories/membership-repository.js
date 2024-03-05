const CrudRepository = require("./crud-repository");
const { membership } = require("../models");

class MembershipRepository extends CrudRepository {
  constructor() {
    super(membership);
  }

  async getByUserId(userId) {
    const user = await membership.findOne({ where: { userId: userId } });
    return user;
  }
}

module.exports = MembershipRepository;
