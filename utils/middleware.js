// isLogged middleware
exports.isLogged = (req, res, next) => {
  if (!req.user) {
    res.redirect('/no-permission');
  } else {
    next();
  }
};
