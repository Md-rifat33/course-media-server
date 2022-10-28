const express = require('express');
const { courseController } = require('./../controllers');

const router = express.Router();

router.get('/', courseController.getAllCourse);

module.exports = router;
