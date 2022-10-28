const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { courseService } = require('../services');
const { info } = require('../config/logger');
const { fetchCourseById, fetchCourseBySlug } = require('../services/course.service');

const getAllCourse = catchAsync(async (req, res) => {
  const { slug, id } = req.query;

  if (slug) {
    fetchCourseBySlug();
    return res.json({ slug });
  }

  if (id) {
    fetchCourseById();
    return res.json({ id });
  }

  const data = await courseService.fetchCourses();
  res.status(httpStatus.OK).json(data);
});

module.exports = {
  getAllCourse,
};
