'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const password = await bcrypt.hash('kelompok2', 10);
    const timestamp = new Date();
    const userId = uuidv4();


    return queryInterface.bulkInsert('Users', [
      {
        id: userId,
        name: 'Abdul Talif',
        email: 'talif@gmail.com',
        password: password,
        token: null,
        createdAt: timestamp,
        updatedAt: timestamp
      }
      // Add more user data if needed
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
