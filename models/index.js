// Purpose: Export all models
const Avatar = require("./Avatar");
const Post = require("./Post");
const User = require('./User');

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = {
  User,
  Avatar,
  Post,
};