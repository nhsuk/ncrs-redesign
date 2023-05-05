module.exports = function (req, res, next) {
  // Reset any errors and copy it into the current template data
  if (req.session.data.errors) {
    res.locals.errors = req.session.data.errors;
  }
  req.session.data.errors = {};
  next();
};
