const { Router } = require('express');
const { check } = require('express-validator');
const { loadFile } = require('../controllers/fileController');

const router = Router();

router.post('/', loadFile)

module.exports = router;

