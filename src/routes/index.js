const express = require("express");
const router = express.Router();
const addressRoute = require('./address');
const defaultRoutes = [
  {
    path: '/address',
    route: addressRoute,
  },
];
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;