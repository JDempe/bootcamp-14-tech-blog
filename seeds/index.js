const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userSeedData = require("./userSeedData.json");
const postSeedData = require("./postSeedData.json");

const seedDb = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- Database synced -----\n");

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });
  console.log("'\n ----- Users seeded -----\n");

  for (const postData of postSeedData) {
    await Post.create({
      ...postData,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  console.log("'\n ----- Posts seeded -----\n");

  process.exit(0);
};

seedDb();