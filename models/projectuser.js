'use strict';
module.exports = function(sequelize, DataTypes) {
  var ProjectUser = sequelize.define('ProjectUser', {
    admin: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ProjectUser;
};
