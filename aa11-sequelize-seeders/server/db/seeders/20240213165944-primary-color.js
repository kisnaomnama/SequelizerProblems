'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up(queryInterface, Sequelize) {

// bulkInsert:
// This method is more low-level compared to bulkCreate.
// It directly inserts the provided array of objects into the database without going through Sequelize's model lifecycle hooks or validations.
// It doesn't return instances of the created records.
// It's generally faster than bulkCreate because it skips validation and lifecycle hooks.
// It's useful when you need to insert a large amount of data quickly and you're sure the data is valid.
// //! bulkInsert SKIP THE VALIDATION and hook life cycle

    await queryInterface.bulkInsert('Colors', [
      {
        id: 1,
        name: 'blue',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'red',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],);
  },

  // await queryInterface.bulkCreate('Colors', [
  //   {
  //     id: 1,
  //     name: 'blue',
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     id: 2,
  //     name: 'red',
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   }
  // ]);


  async down(queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Colors', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
