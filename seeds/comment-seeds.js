const { Comment } = require('../models');

const commentdata = [
  {
      "comment_text": "Nice article",
      "user_id": "1",
      "post_id":"2"
  },
  {
      "comment_text": "Nice article",
      "user_id": "2",
      "post_id":"3"
  },
  {
      "comment_text": "Nice article",
      "user_id": "3",
      "post_id":"4"
  },
  {
      "comment_text": "Nice article",
      "user_id": "4",
      "post_id":"5"
  },
  {
      "comment_text": "Nice article",
      "user_id": "5",
      "post_id":"6"
  },
  {
      "comment_text": "Nice article",
      "user_id": "6",
      "post_id":"5"
  },
  {
      "comment_text": "Nice article",
      "user_id": "1",
      "post_id":"6"
  }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;