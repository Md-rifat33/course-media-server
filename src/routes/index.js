const express = require('express');
const courseRoute = require('./course.route');

const router = express.Router();

//Router

const defaultRoutes = [
  {
    path: '/course',
    route: courseRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
