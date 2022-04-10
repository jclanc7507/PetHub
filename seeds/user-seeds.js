const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: "Bob",
    email: "sal@hotmail.com",
    password: "password12345",
    userImage: "default.png"
  },
  {
    username: "Daisy",
    email: "lernantino@gmail.com",
    password: "password12345",
    userImage: "default.png"
  },
  {
    username: "Elm",
    email: "amiko2k20@aol.com",
    password: "password12345",
    userImage: "default.png"
  },
  {
    username: "Golden",
    email: "sam@hotmail.com",
    password: "password12345",
    userImage: "default.png"
  },
  {
    username: "Snow",
    email: "pat@gmail.com",
    password: "password12345",
    userImage: "default.png"
  },
  {
    username: "Missy",
    email: "maria@aol.com",
    password: "password12345",
    userImage: "default.png"
  }
];


const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;