const express = require('express');
const userBridevController = require('../controllers/userBridevController');
const router = express.Router();
const multer = require('multer');
const authMiddleware = require('../middlewares/authMiddleware');

const upload = multer({ dest: 'uploads/user-bridev/' });

router.post('/user-bridev', upload.single('file'), userBridevController.createUser);
router.get('/user-bridev', userBridevController.getUsers);
router.get('/user-bridev/:id', userBridevController.getUserById);
router.get('/user-bridev/search/email_work/:email_work', userBridevController.getUserByEmailWork);
router.get('/user-bridev/search/email_brilian/:email_brilian', userBridevController.getUserByEmailBrilian);
router.put('/user-bridev/:id', userBridevController.updateUser);
router.delete('/user-bridev/:id', userBridevController.deleteUser);

module.exports = router;
