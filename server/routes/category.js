const express = require('express');
const router = express.Router();
const categorycontroller = require('../controller/category');

router.post('/add-category', categorycontroller.addCategory);

router.get('/categories', categorycontroller.showCategory);

router.get('/category/:id', categorycontroller.singleCategory);

module.exports = router;
