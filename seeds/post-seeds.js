const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/1.png'),
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/2.jpg'),
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/3.jpg'),
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/4.png'),
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/5.jpg'),
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/6.jpg'),    
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/7.jpg'),
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/8.jpg'),
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/9.jpg'),
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/10.jpg'),
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/11.jpg'),
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/12.jpg'),
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/13.jpg'),
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/14.jpg'),
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/15.jpg'),
    user_id: 3
  },
  {
    title: 
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/16.jpg'),
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/17.jpg'),
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/18.jpg'),
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/19.jpg'),
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_url: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus nulla nihil illo temporibus ducimus impedit possimus.',
    post_image: ('../public/images/20.jpg'),
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;