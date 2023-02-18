const { Router } = require('express');
const { check } = require('express-validator')

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
router.post('/', [
    check('email', 'Email is not correct').isEmail(),
	check('name', 'Name is mandatory').isNot().isEmpty()
],
fieldValidator,userPost);
router.put('/update/id/:id', userPut);
router.patch('/', userPatch);
router.delete('/', userDel);

module.exports = router;

