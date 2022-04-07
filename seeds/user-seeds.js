const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    name: "Bob",
    email: "sal@hotmail.com",
    password: "password12345"
  },
  {
    name: "Daisy",
    email: "lernantino@gmail.com",
    password: "password12345"
  },
  {
    name: "Elm",
    email: "amiko2k20@aol.com",
    password: "password12345"
  },
  {
    name: "Golden",
    email: "sam@hotmail.com",
    password: "password12345"
  },
  {
    name: "Snow",
    email: "pat@gmail.com",
    password: "password12345"
  },
  {
    name: "Missy",
    email: "maria@aol.com",
    password: "password12345"
  }
];


const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
