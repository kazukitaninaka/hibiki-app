const express = require('express');
const router = express.Router();
const memberControl = require('../controller/memberController');

router.get('/', memberControl.getMembers(10));
router.get('/10th', memberControl.getMembers(10));
router.get('/9th', memberControl.getMembers(9));

// select numbers to perform
router.get('/select', memberControl.selectNumbers_get);
router.post('/select', memberControl.selectNumbers_post);

// add position
router.get('/add', memberControl.selectNumbers_post);
router.post('/add', memberControl.addPosition);

// for postman
router.post('/', memberControl.createMember);
router.patch('/:id', memberControl.updateMember);

module.exports = router;
