const router = require('express').Router();
const { Comic } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComic = await Comic.create({
      ...req.body,
      comic_id: req.session.comic_id,
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
        comic_id: req.session.comic_id,
      },
    });

    // if (!ComicData) {
    //   res.status(404).json({ message: 'No comic found!' });
    //   return;
    // }

    res.status(200).json(ComicData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;