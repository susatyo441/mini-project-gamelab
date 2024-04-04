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

// router.get("/products", authentication, getAllProducts);
router.get("/products", getAllProducts);
router.post("/products", authentication, upload.single("gambar"), createProduct);
router.put("/products/:id", authentication, upload.single("gambar"), updateProduct);
router.delete("/products/:id", authentication, deleteProduct);
router.get("/products/search",  getProductsByName);
router.get("/products/:id", getProductById);

module.exports = router;
