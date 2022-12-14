const router = require('express').Router();
const { Comic, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    res.render('landing', {
      logged_in: req.session.logged_in 
    })
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/comic/:id', async (req, res) => {
  try {
    const comicData = await Comic.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const comic = comicData.get({ plain: true });

    res.render('comic', {
      ...comic,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/creation', withAuth, async (req, res) => {
  try{
    res.render('creation', {
    logged_in: req.session.logged_in
  });
} catch (err) {
  res.status(500).json(err);
}
})

// withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Comic }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/feed', withAuth, async (req, res) => {
  try {
    // find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Comic }],
    });

    const user = userData.get({ plain: true });

    res.render('feed', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // if user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
