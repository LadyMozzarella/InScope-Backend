module.exports = (sequelize, DataTypes) => sequelize.define('User', {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  classMethods: {
    associate() {
      // associations can be defined here
    },
  },
});
