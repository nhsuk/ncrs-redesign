module.exports = config => (req, res, next) => {
  res.locals.serviceName = config.serviceName;
  res.locals.page = {
    url: req.url
  };

  res.locals.patientsList = require('./data/patients-list.js');

  next();
}
