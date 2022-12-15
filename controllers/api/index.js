// All api routes

const router = require('express').Router();
const comicRoutes = require('./comicRoutes');
const userRoutes = require('./userRoutes');
const searchRoutes = require('./searchRoutes')

router.use('/comics' , comicRoutes);
router.use('/users' , userRoutes);
router.use('/search', searchRoutes)

module.exports = router;