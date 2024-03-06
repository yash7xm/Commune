const CrudRepository = require("./crud-repository");
const { membership, users, channels } = require("../models");

class MembershipRepository extends CrudRepository {
  constructor() {
    super(membership);
  }

  async getByUserId(userId) {
    const user = await membership.findOne({ where: { userId: userId } });
    return user;
  }

  async getAll(userId) {
    const response = await membership.findAll({
      where: {
        userId: userId,
      },
      include: [
        {
          model: channels,
          required: true,
          as: "channelDetail",
        },
      ],
    });
    return response;
  }
}

module.exports = MembershipRepository;
