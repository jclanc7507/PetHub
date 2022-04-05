const User = require('./User');
const Pet = require('./Pet');

User.hasMany(Pets, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Pet };
