const router = require('express').Router();
const comicRoutes = require('./comicRoutes');
const searchRoutes = require('./searchRoutes');
const userRoutes = require('./userRoutes');

router.use('/comics' , comicRoutes);
router.use('/comicsearch' , searchRoutes);
router.use('/auth' , userRoutes);

module.exports = router;