// Purpose: Export all models
const Post = require("./Post");
const User = require('./User');

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = {
  User,
  Post,
};