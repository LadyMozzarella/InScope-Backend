module.exports = (sequelize, DataTypes) => sequelize.define('Project', {
  name: DataTypes.STRING,
}, {
  classMethods: {
    associate() {
      // associations can be defined here
    },
  },
});
