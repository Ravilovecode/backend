const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const { authenticateToken, authenticateAdminToken } = require('../middleware/auth');

//creating product (admin only)
router.post('/', authenticateAdminToken, productController.createProduct);

// Get All Products (Public)
router.get('/', productController.getAllProducts);

// Get Single Product (Public)
router.get('/:id', productController.getProductById);

// Update Product (Admin only)
router.put('/:id', authenticateAdminToken, productController.updateProduct);

// Delete Product (Admin only)
router.delete('/:id', authenticateAdminToken, productController.deleteProduct);

module.exports = router;
