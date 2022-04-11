const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
<<<<<<< HEAD
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
=======
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123'
>>>>>>> 56c0f19010b32935bcf0752342e853b410215de2
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;