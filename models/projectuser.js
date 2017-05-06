module.exports = (sequelize, DataTypes) => sequelize.define('ProjectUser', {
  admin: DataTypes.BOOLEAN,
}, {
  classMethods: {
    associate() {
      // associations can be defined here
    },
  },
});
