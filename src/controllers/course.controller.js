const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { courseService } = require('../services');


const getAllCourse = catchAsync(async (req, res) => {
  const data = await courseService.fetchCourses();
  res.status(httpStatus.OK).json(data);
});

module.exports = {
 getAllCourse
};