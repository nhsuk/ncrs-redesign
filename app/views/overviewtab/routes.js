const moment = require("moment");
moment.locale("en-gb");

const patientList = require("../../data/patients-list.js");

function formatName(str) {
return str
  .replace(/(\B)[^ ]*/g, (match) => match.toLowerCase())
 .replace(/^[^ ]/g, (match) => match.toUpperCase());
 }

module.exports = (router) => {

router.get("/overviewtab/patient", function (req, res, next) {
let nhsNumber = req.session.data["nhs-number"];
let patientList = require("../../data/patients-list.js");
let patientsData = {};
patientsData = patientList[nhsNumber]
req.session.data['patient'] = patientsData;

return res.render('overviewtab/patient')
});
