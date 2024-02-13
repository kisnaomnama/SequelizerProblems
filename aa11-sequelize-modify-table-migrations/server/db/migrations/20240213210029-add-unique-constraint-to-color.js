'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Colors',{
      fields: ['name'],
      type: 'unique',
      name: 'unique_name_constraint'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Colors','unique_name_constraint')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
