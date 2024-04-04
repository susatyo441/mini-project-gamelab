const express = require("express");
const multer = require("multer");
const upload = require("../middleware/storage-middleware.js");
const userController = require("../controller/user-controller.js");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getProductsByName,
} = require("../controller/product-controller.js");
const { authentication } = require("../middleware/auth-middleware.js");
const router = express.Router();

router.post("/login", userController.login);
router.post("/logout", authentication, userController.logout);

router.use(authentication);
/* 
    CRUD Route Start
*/
// Rute untuk mengambil semua produk
router.get("/products", getAllProducts);

// Rute untuk menambahkan produk baru
// Endpoint untuk membuat produk dengan unggahan gambar
router.post("/products", upload.single("gambar"), createProduct);
// router.post('/test', upload.single('gambar'));

// Rute untuk memperbarui produk berdasarkan ID
router.put("/products/:id", upload.single("gambar"), updateProduct);

// Rute untuk menghapus produk berdasarkan ID
router.delete("/products/:id", deleteProduct);

// Rute untuk mencari produk berdasarkan nama
router.get("/products/search", getProductsByName);

// Rute untuk mengambil produk berdasarkan ID
router.get("/products/:id", getProductById);
/* 
    CRUD Route End
*/

module.exports = router;
