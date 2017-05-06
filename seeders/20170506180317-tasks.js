module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('Tasks', [{
      name: 'Create a Tasks Seed',
      description: 'Create the seed file containing a few tasks.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Obtain Tasks from Database',
      description: 'Get the tasks from the database using Sequelize models.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Implement an Endpoint to Get Tasks',
      description: 'Implement an example endpoint that demonstrates getting all tasks.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('Tasks', null, {});
  },
};
