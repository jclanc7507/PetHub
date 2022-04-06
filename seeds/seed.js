const sequelize = require('../config/connection');
const { User, Pet } = require('../models');

const userData = require('./userData.json');
const petData = require('./petData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Pet.create({
      ...Pet,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
