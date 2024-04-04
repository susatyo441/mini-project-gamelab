  'use strict';

  /** @type {import('sequelize-cli').Migration} */
  module.exports = {
    async up(queryInterface, Sequelize) {
      /**
       * Add altering commands here.
       *
       * Example:
       * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
       */
      await queryInterface.createTable('products', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        product_name: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        description: {
          type: Sequelize.TEXT, // Use TEXT for long descriptions
          allowNull: false
        },
        price: {
          type: Sequelize.DECIMAL(10, 2), // Consider using DECIMAL for prices
          allowNull: false
        },
        gambar: {
          type: Sequelize.STRING(255),
          allowNull: true // Allow null for cases where image might not be available
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
        }
      });
    },

    async down(queryInterface, Sequelize) {
      /**
       * Add reverting commands here.
       *
       * Example:
       * await queryInterface.dropTable('users');
       */
      await queryInterface.dropTable('products');
    }
  };
