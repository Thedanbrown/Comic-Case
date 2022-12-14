const sequelize = require('../config/connection');
const { User, Comic } = require('../models');

const userData = require('./userData.json');
const comicData = require('./comicData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

for (const comic of comicData) {
    await Comic.create({
        ...comic,
        user_id: users[Math.floor(Math.random() * users.length)].id,
    });
}

    process.exit(0);
};

seedDatabase();