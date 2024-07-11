const express = require('express');
const userBridevController = require('../controllers/userBridevController');
const router = express.Router();

router.post('/user-bridev', userBridevController.createUser);
router.get('/user-bridev', userBridevController.getUsers);
router.get('/user-bridev/:id', userBridevController.getUserById);
router.get('/user-bridev/:email_work', userBridevController.getUserByEmailWork);
router.get('/user-bridev/:email_brilian', userBridevController.getUserByEmailBrilian);
router.put('/user-bridev/:id', userBridevController.updateUser);
router.delete('/user-bridev/:id', userBridevController.deleteUser);

module.exports = router;
