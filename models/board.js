module.exports = (sequelize, DataTypes) => sequelize.define('Board', {
  name: DataTypes.STRING,
}, {
  classMethods: {
    associate() {
      // associations can be defined here
    },
  },
});
