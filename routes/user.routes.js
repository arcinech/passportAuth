const express = require('express');
const router = express.Router();
const { isLogged } = require('../utils/middleware');

router.get('/logged', isLogged, (req, res) => {
  res.render('logged', {
    picture: req.user._json.picture,
    name: req.user.displayName,
  });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isLogged, (req, res) => {
  console.log(req.user);
  res.render('profile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('settings');
});

module.exports = router;
