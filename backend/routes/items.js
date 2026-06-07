const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
  getLowStockItems,
  getStats,
} = require('../controllers/itemController');

// All item routes are private
router.use(protect);

// Statistics
router.get('/stats', getStats);
router.get('/low-stock', getLowStockItems);

// CRUD operations
router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', authorize('admin', 'supervisor'), createItem);
router.put('/:id', authorize('admin', 'supervisor'), updateItem);
router.delete('/:id', authorize('admin'), deleteItem);

module.exports = router;
