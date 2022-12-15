const router = require('express').Router();
const { Comic } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body)
    const newComic = await Comic.create({
      ...req.body,
      user_id: req.session.user_id, // Janaee worked with Tutor to review, changed to user_id so that the user id is passed with the comic in session to save to DB
    });

    res.status(200).json(newComic);
  } catch (err) {
    res.status(400).json(err);
  }
});

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