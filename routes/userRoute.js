const express = require('express');
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const router = express.Router();

router.get('/', authMiddleware, roleMiddleware('admin'), getAllUsers);
router.get('/:id', authMiddleware, roleMiddleware('admin'), getUserById);
router.put('/:id', authMiddleware, roleMiddleware('admin'), updateUser);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), deleteUser);

module.exports = router;
