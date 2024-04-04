const Product = require("../models/product-model.js");
const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');

const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// const createProduct = async (req, res, next) => {
//     try {
//         const { product_name, description, price, gambar } = req.body;

//         const newProduct = await Product.create({
//             product_name,
//             description,
//             price,
//             gambar,
//         });
//         const successMessage = {
//             status: 'success',
//             message: 'Product successfully created',
//             data: newProduct
//         };
//         res.status(201).json(successMessage);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
const createProduct = async (req, res, next) => {
    try {
        const { product_name, description, price } = req.body;
        let gambarPath = ''; // Variabel untuk menyimpan path gambar

        // Jika ada file gambar yang diunggah, simpan path gambar
        if (req.file) {
            gambarPath = req.file.filename; // Path file gambar di server
        }

        // Simpan path gambar ke database
        const newProduct = await Product.create({
            product_name,
            description,
            price,
            gambar: gambarPath, // Simpan path gambar di database
        });

        const successMessage = {
            status: 'success',
            message: 'Product successfully created',
            data: newProduct
        };

        res.status(201).json(successMessage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const { product_name, description, price } = req.body;

        let gambarPath = ''; // Variabel untuk menyimpan path gambar baru

        // Jika ada file gambar yang diunggah, simpan path gambar baru
        if (req.file) {
            gambarPath = req.file.filename; // Path file gambar di server

            // Dapatkan produk yang akan diperbarui
            const product = await Product.findByPk(productId);

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            // Hapus foto lama jika ada
            if (product.gambar) {
                // Hapus foto lama dari direktori server
                // Gunakan fs.unlink() atau metode lain sesuai dengan kebutuhan Anda
            }
        } else {
            // Jika tidak ada gambar baru, gunakan gambar lama
            const product = await Product.findByPk(productId);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            gambarPath = product.gambar;
        }

        // Simpan path gambar baru atau lama ke database
        await Product.update({
            product_name,
            description,
            price,
            gambar: gambarPath, // Gunakan path gambar baru atau lama
        }, {
            where: { id: productId }
        });

        const updatedProduct = await Product.findByPk(productId);

        const successMessage = {
            status: 'success',
            message: 'Product successfully updated',
            data: updatedProduct
        };

        res.status(200).json(successMessage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// const updateProduct = async (req, res, next) => {
//     try {
//         const productId = req.params.id;
//         const { product_name, description, price, gambar } = req.body;

//         const product = await Product.findByPk(productId);

//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }

//         await product.update({
//             product_name,
//             description,
//             price,
//             gambar,
//         });

//         const updatedProduct = await Product.findByPk(productId);

//         const successMessage = {
//             status: 'success',
//             message: 'Product successfully updated',
//             data: updatedProduct
//         };

//         res.status(200).json(successMessage);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

const deleteProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;

        const product = await Product.findByPk(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        // Menambahkan path gambar ke respons
        const imagePath = ('../uploads/'+ product.gambar);

        // Hapus file gambar jika ada
        if (product.gambar) {
            // Dapatkan path lengkap ke file gambar
            const filePath = path.join(__dirname, '../uploads/', product.gambar);

            // Panggil fungsi deleteImage untuk menghapus file gambar
            deleteImage(imagePath);
        } else {
            console.log('Produk tidak memiliki gambar');
        }
        await product.destroy();

        const successMessage = {
            status: 'success',
            message: 'Product successfully deleted',
            // Menambahkan path gambar ke respons
            imagePath: imagePath
        };

        res.status(200).json(successMessage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductById = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const product = await Product.findByPk(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductsByName = async (req, res, next) => {
    try {
        let searchName = req.query.name;
        if (searchName) {
            searchName = searchName.toLowerCase();
        } else {
            return res.status(400).json({ message: 'Parameter "name" is required' });
        }

        const products = await Product.findAll({
            where: {
                product_name: {
                    [Op.like]: `%${searchName}%`
                }
            }
        });

        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found with the provided name' });
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* 
    fungsi umum
*/
const deleteImage = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting image:', err);
        } else {
            console.log('Image deleted successfully');
        }
    });
};
module.exports = { getAllProducts, createProduct, updateProduct, deleteProduct, getProductById, getProductsByName };
