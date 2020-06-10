const express = require('express');
const router = express.Router();
const memberControl = require('../controller/memberController');

router.get('/', memberControl.getMembers(10));
router.get('/10th', memberControl.getMembers(10));
router.get('/9th', memberControl.getMembers(9));
router.get('/11th', memberControl.getMembers(11));
router.get('/12th', memberControl.getMembers(12));
router.get('/13th', memberControl.getMembers(13));

// select numbers to perform
router.get('/select', memberControl.selectNumbers_get);
router.post('/select', memberControl.selectNumbers_post);

// add position
router.get('/add', memberControl.selectNumbers_post);
router.post('/add', memberControl.addPosition);

// create new member
router.get('/newMember', memberControl.createMember_get);
router.post('/newMember', memberControl.createMember_post);
router.get('/add', memberControl.createMember_post);

// update member
router.get('/updateMember', memberControl.updateMember_get);
router.post('/updateMember', memberControl.updateMember_patch);
router.get('/add', memberControl.updateMember_patch);
router.get('/error', memberControl.updateMember_patch);

//update big
router.get('/updateBig', memberControl.updateBig_get);
router.post('/updateBig', memberControl.updateBig_patch);
router.get('/add', memberControl.updateMember_patch);

module.exports = router;
