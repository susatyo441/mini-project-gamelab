'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Products', [{
      product_name: "T-Shirt",
      description: "Comfortable cotton T-Shirt",
      price: 19.99,
      gambar: "/images/t-shirt.jpg",
    },
    {
      product_name: "Laptop",
      description: "Powerful laptop for work and play",
      price: 799.99,
      gambar: "/images/laptop.jpg", // Replace with your actual image path
    },
    {
      product_name: "Smartphone",
      description: "Latest smartphone with advanced features",
      price: 499.99,
      gambar: "/images/smartphone.jpg", // Replace with your actual image path
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
