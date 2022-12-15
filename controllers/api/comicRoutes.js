const router = require('express').Router();
const { Comic } = require('../../models');
const withAuth = require('../../utils/auth');

//route handler to create new comic. this uses the withAuth middleware to uthenticate the request and ensure that it is coming from an authenticated user.
router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body)
    const newComic = await Comic.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComic);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route handler to delete a comic. this uses the withAuth middleware to uthenticate the request and ensure it comes from an authenticated user.
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const ComicData = await Comic.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!ComicData) {
      res.status(404).json({ message: 'No comic found!' });
      return;
    }

    res.status(200).json(ComicData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;