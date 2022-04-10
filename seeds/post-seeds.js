const { Post } = require('../models');

const postdata = [
  {
    title: "Doggie Meet at Park",
    post_url: "https://www.google.com/search?q=Doggie+Park",
    // "body": "I am German Shepard. Meet me at a dog park to play fetch.",
    user_id: 1
  },
  {
    title: "Snow Introduction",
    post_url: "https://www.google.com/search?q=persian+cat",
    // "body": "I am a Persian Cat.",
    user_id: 2
  },
  {
    title: "Learn More about Flower Horn Fish",
    post_url: "https://www.google.com/search?q=flower+horn+fish",
    // "body": "Flowerhorn cichlids are ornamental aquarium fish noted for their vivid colors and the distinctively shaped heads for which they are named. Their head protuberance is formally called a nuchal hump. Like blood parrot cichlids, they are hybrids that exist in the wild only because of their release.",
    user_id: 3
  },
  {
    title: "What does Corn Snake Eat",
    post_url: "https://www.google.com/search?q=What+does+Corn+Snake+Eat",
    // "body": "Mice should be your corn snake's most common food, but you can feed them other prey, such as suitably sized quails or rats.",
    user_id: 4
  },
  {
    title: "Tricks to teach a Yorkie",
    post_url: "https://www.google.com/search?q=Trick+to+teach+a+yorkie",
    // "body": "Some tricks to teach a yorkie are sit, stay, lay down, speak, shake, and roll over.",
    user_id: 5
  },
  {
    title: "Legends about Cats",
    post_url: "https://www.google.com/search?q=Legends+about+Cats",
    // "body": "A legend about cats is that they can predict the weather.",
    user_id: 6
  },
  {
    title: "Polly Introduction",
    post_url: "https://www.google.com/search?q=Cockatiel+bird",
    // "body": "I am a Cockatiel bird and I just learned how to say pretty bird.",
    user_id: 3
  },
  {
    title: "Fall Photoshoot",
    post_url: "https://www.google.com/search?q=french+bulldog",
    // "body": "I am a french bulldog.",
    user_id: 5
  },
  {
    title: "How Big Does a Gold Fish Get",
    post_url: "https://www.google.com/search?q=goldfish",
    // "body": "According to National Geographic, goldfish are usually around 7 to 16.1 inches long and weigh 0.2 to 0.6 pounds, but can top 5 pounds in the wild.",
    user_id: 4
  },
  {
    title: "Love Birds",
    post_url: "https://www.google.com/search?q=love+birds",
    // "body": " Once there was a prince name Matt and a princess name Mary. They fell in love.",
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;