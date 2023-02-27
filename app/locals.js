const patientList = require('./data/patients-list.js');
module.exports = config => (req, res, next) => {
  res.locals.serviceName = config.serviceName;
  res.locals.page = {
    url: req.url
  };

  res.locals.patientsList = patientList;

  const nhsNumber =
    req.session.data["nhs-number"] || req.query["nhs-number"] || 1234567890;
  res.locals.patient = patientList[nhsNumber];

  next();
}
