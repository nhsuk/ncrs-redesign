const moment = require("moment");
moment.locale("en-gb");

const patientList = require("../../../data/patients-list.js");

function formatName(str) {
  return str
    .replace(/(\B)[^ ]*/g, (match) => match.toLowerCase())
    .replace(/^[^ ]/g, (match) => match.toUpperCase());
}

module.exports = (router) => {
  router.post("/overviewtab/v1/nhs-number-search-post", function (req, res) {
    const nhsNumber = req.body["nhs-number"];
    const scenario = req.session.data["scenario"];

    req.session.data.errors = {};

    // If there is no submitted option
    if (!nhsNumber) {
      req.session.data.errors["nhs-number"] = true;
      return res.redirect("/overviewtab/v1/nhs-number-search");
    }

    res.redirect(`/overviewtab/v1/search-results?nhs-number=${nhsNumber}`);
  });

  router.post("/overviewtab/v1/basic-details-search", function (req, res) {
    const gender = req.body["gender"];
    const lastName = req.body["last-name"];
    const dobDay = req.body["dob-day"];
    const dobMonth = req.body["dob-month"];
    const dobYear = req.body["dob-year"];

    req.session.data.errors = {};

    if (!gender) {
      req.session.data.errors["gender"] = true;
    }
    if (!lastName) {
      req.session.data.errors["last-name"] = true;
    }
    if (!dobDay || !dobMonth || !dobYear) {
      req.session.data.errors["dob"] = true;
    }

    if (Object.keys(req.session.data.errors).length) {
      return res.redirect("/overviewtab/v1/basic-details-search");
    }

    // Format the data provided ready for processing
    const date = new Date(dobYear, dobMonth - 1, dobDay);
    const formattedDob = moment(date).format("DD-MMM-YYYY");

    const params = new URLSearchParams({
      gender,
      lastName: formatName(lastName),
      dob: formattedDob,
    });
    res.redirect(`/overviewtab/v1/search-results?${params}`);
  });

  router.post("/overviewtab/v1/advanced-details-search", function (req, res) {
    const gender = req.body["gender"];
    const firstName = req.body["first-name"];
    const lastName = req.body["last-name"];
    const dobDayFrom = req.body["dob-day-from"];
    const dobMonthFrom = req.body["dob-month-from"];
    const dobYearFrom = req.body["dob-year-from"];
    const dobDayTo = req.body["dob-day-to"];
    const dobMonthTo = req.body["dob-month-to"];
    const dobYearTo = req.body["dob-year-to"];
    const addressPostcode = req.body["address-postcode"];
    const widenSearch = req.body["widen-search"];

    req.session.data.errors = {};

    if (!gender) {
      req.session.data.errors["gender"] = true;
    }

    if (!firstName) {
      req.session.data.errors["first-name"] = true;
    }

    if (!lastName) {
      req.session.data.errors["last-name"] = true;
    }

    if (!dobDayTo || !dobMonthTo || !dobYearTo) {
      req.session.data.errors["dob-to"] = true;
    }

    if (!dobDayFrom || !dobMonthFrom || !dobYearFrom) {
      req.session.data.errors["dob-from"] = true;
    }

    if (!addressPostcode) {
      req.session.data.errors["address-postcode"] = true;
    }

    if (Object.keys(req.session.data.errors).length) {
      return res.redirect("/overviewtab/v1/advanced-details-search");
    }

    const formattedPostcode = addressPostcode.toUpperCase().replace(/\s/g, "");

    const fullDobFrom = dobDayFrom + "/" + dobMonthFrom + "/" + dobYearFrom;
    const dobFrom = moment(fullDobFrom, "DD-MM-YYYY").format("MM/DD/YYYY");

    const fullDobTo = dobDayTo + "/" + dobMonthTo + "/" + dobYearTo;
    const dobTo = moment(fullDobTo, "DD-MM-YYYY").format("MM/DD/YYYY");

    const params = new URLSearchParams({
      gender,
      firstName: formatName(firstName),
      lastName: formatName(lastName),
      postcode: formattedPostcode,
      dobFrom,
      dobTo,
      widenSearch,
    });
    res.redirect(`/overviewtab/v1/search-results?${params}`);
  });

  router.post("/overviewtab/v1/postcode-search", function (req, res) {
    const addressPostcode = req.body["postcode-only"];
    req.session.data.errors = {};

    if (!addressPostcode) {
      req.session.data.errors["postcode-only"] = true;
    }

    if (Object.keys(req.session.data.errors).length) {
      return res.redirect("/overviewtab/v1/postcode-search");
    }

    // Format the data provided ready for processing
    const formattedPostcode = addressPostcode.toUpperCase().replace(/\s/g, "");
    const params = new URLSearchParams({
      postcode: formattedPostcode,
    });
    res.redirect(`/overviewtab/v1/search-results?${params}`);
  });

  router.get("/overviewtab/v1/search-results", function (req, res, next) {
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

  //back links that disappear when not navigated to from search bar
  //for overview1
  router.get("/overviewtab/v1/overview", function (req, res, next) {
    let showsearch = req.query.search;
    if (showsearch === "true") {
      var searchLink = "true";
    } else {
      var searchLink = "false";
    }

    //to delete data
    req.session.data.search = "";

    //go to overview
    return res.render("overviewtab/v1/overview", {
      backtoresults: searchLink,
    });
  });

  //for overview2
  router.get("/overviewtab/v1/overview2", function (req, res, next) {
    let showsearch = req.query.search;
    if (showsearch === "true") {
      var searchLink = "true";
    } else {
      var searchLink = "false";
    }

    //to delete data
    req.session.data.search = "";

    //go to overview2
    return res.render("overviewtab/v1/overview2", {
      backtoresults: searchLink,
    });
  });

  //for patient details1
  router.get("/overviewtab/v1/patient_1", function (req, res, next) {
    let showsearch = req.query.search;
    if (showsearch === "true") {
      var searchLink = "true";
    } else {
      var searchLink = "false";
    }

    //to delete data
    req.session.data.search = "";

    //go to overview2
    return res.render("overviewtab/v1/patient_1", {
      backtoresults: searchLink,
    });
  });
};
