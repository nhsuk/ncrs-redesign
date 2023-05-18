const moment = require("moment");
moment.locale("en-gb");

const patientList = require("../../data/patients-list.js");

function formatName(str) {
  return str
    .replace(/(\B)[^ ]*/g, (match) => match.toLowerCase())
    .replace(/^[^ ]/g, (match) => match.toUpperCase());
}

module.exports = (router) => {
  router.post("/search/nhs-number-search", function (req, res) {
    const nhsNumber = req.body["nhs-number"];

    req.session.data.errors = {};

    // If there is no submitted option
    if (!nhsNumber) {
      req.session.data.errors["nhs-number"] = true;
      return res.redirect("/search/nhs-number-search");
    }

    res.redirect(`/search/search-results?nhs-number=${nhsNumber}`);
  });


  router.get("/ovm/patient-overview-ovm", function (req, res, next) {
    let nhsNumber = req.session.data["nhs-number"];
    let patientList = require("../../data/patients-list.js");
    let patientsData = {};
    patientsData = patientList[nhsNumber]
    req.session.data['patient'] = patientsData;

    return res.render('ovm/patient-overview-ovm')
  });

  // move patient data into data store
  router.post("/ovm/patient-details-ovm-status-edit-all-post", function (req, res) {
    let nhsNumber = req.session.data["nhs-number"];
    let patientList = require("../../data/patients-list.js");
    let patientsData = {};
    patientsData = patientList[nhsNumber]
    req.session.data['patient'] = patientsData;
    res.redirect(`/ovm/confirm-changes-all-changes`);
  });

  router.post("/ovm/confirm-changes-all-changes-post", function (req, res) {
    //
    res.redirect(`/ovm/patient-details-ovm`);
  });

};
