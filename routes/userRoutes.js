const { Router } = require('express');
const { 
    userGet,
    userGetParams, 
    userPost, 
    userPut, 
    userPatch, 
    userDel } = require('../controllers/userController');

const router = Router();

router.get('/', userGet);
router.get('/params', userGetParams);
router.post('/', userPost);
router.put('/update/id/:id', userPut);
router.patch('/', userPatch);
router.delete('/', userDel);

module.exports = router;

