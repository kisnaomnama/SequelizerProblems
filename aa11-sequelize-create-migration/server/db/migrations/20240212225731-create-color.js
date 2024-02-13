'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Colors', {
      id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },

      opacity: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
        defaultValue: 'strong', 
      },

      isDark: {
        type: Sequelize.DataTypes.BOOLEAN,
        default: false
      },

      thickness: {
        type: Sequelize.DataTypes.DECIMAL(4,2),
        allowNull: false
      },

      foundDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), 
        allowNull: false
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }

          // blueShades_id: {
      //   type: Sequelize.DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: blueShades,
      //     key: id
      //   }
      // },

    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Colors')
  }
};
