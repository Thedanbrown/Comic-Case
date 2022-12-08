const User = require('./User');
const Comic = require('./Comic');

User.hasMany(Comic, {
    foreignKey: 'email',
    onDelete: 'CASCADE'
});

Comic.belongsTo(User, {
    foreignKey: 'email'
});

module.exports = { User, Comic };