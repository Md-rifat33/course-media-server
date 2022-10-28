const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { courseService } = require('../services');
const { info } = require('../config/logger');

const getAllCourse = catchAsync(async (req, res) => {
  const { slug, id } = req.query;

  if (slug) {
    return res.json({ slug });
  }

  if (id) {
    return res.json({ id });
  }

  const data = await courseService.fetchCourses();
  res.status(httpStatus.OK).json(data);
});

module.exports = {
  getAllCourse,
};
