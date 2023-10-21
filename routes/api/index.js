const router = require('express').Router();
const blogRoutes = require('./blogPost-routes');
const blogUserRoutes = require('./blogUser');

router.use('/blog', blogRoutes);
router.use('/blogUser', blogUserRoutes)

module.exports = router;