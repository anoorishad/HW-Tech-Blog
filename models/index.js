const User = require('./User.js');
const Blog = require('./Blog');
const Comment = require('./Comment')

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});





User.hasMany