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


  router.get("/ovm/patient-details-ovm", function (req, res, next) {
    const nhsNumber = req.query["nhs-number"];
    const { gender, firstName, lastName, dob, dobTo, dobFrom, postcode } =
      req.query;

    const isBasicSearch = gender && lastName && dob;
    const isAdvancedSearch =
      gender && firstName && lastName && dobTo && dobFrom && postcode;
    const isPostcodeSearch = postcode && !isAdvancedSearch && !isBasicSearch;
    const isNhsNumberSearch = nhsNumber && !isAdvancedSearch && !isBasicSearch;

    const returnedPatientsList = {};
    for (const [patientNhsNumber, patient] of Object.entries(patientList)) {
      // Basic Details Search
      if (
        isBasicSearch &&
        gender === patient.gender &&
        lastName === patient.lastName &&
        dob === patient.dob
      ) {
        returnedPatientsList[patientNhsNumber] = patient;
        continue;
      }
      // Advanced Details Search
      if (
        isAdvancedSearch &&
        (gender === patient.gender || gender === "Not known") &&
        firstName === patient.firstName &&
        lastName === patient.lastName &&
        moment(new Date(dobFrom)).isBefore(new Date(patient.dob)) &&
        moment(new Date(dobTo)).isAfter(new Date(patient.dob)) &&
        postcode === patient.postcode
      ) {
        returnedPatientsList[patientNhsNumber] = patient;
        continue;
      }
      // Postcode Details Search
      if (isPostcodeSearch && postcode === patient.postcode) {
        returnedPatientsList[patientNhsNumber] = patient;
        continue;
      }
      // NHS Number search
      if (isNhsNumberSearch && patientNhsNumber == nhsNumber) {
        returnedPatientsList[patientNhsNumber] = patient;
      }
    }

    res.locals.returnedPatientsList = returnedPatientsList;
    next();
  });
};
