module.exports = (sequelize, DataTypes) => sequelize.define('Task', {
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
}, {
  classMethods: {
    associate() {
      // associations can be defined here
    },
  },
});
