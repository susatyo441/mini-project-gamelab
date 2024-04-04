const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Products = sequelize.define('Products', {
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    gambar: {
        type: DataTypes.STRING,
        allowNull: true
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE

    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    }
});

module.exports = Products;
