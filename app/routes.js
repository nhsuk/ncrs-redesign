// External dependencies
const express = require("express");
const moment = require("moment");
const router = express.Router();

// Add your routes here - above the module.exports line

// Passing data example
router.get("/examples/passing-data", function (req, res) {
  res.render("examples/passing-data/index");
});

// Branching example
router.post("/examples/branching/answer", function (req, res) {
  let nhsNumber = req.body.nhsNumber;

  if (nhsNumber === "Yes") {
    res.redirect("/examples/branching/answer-yes");
  } else {
    res.redirect("/examples/branching/answer-no");
  }
});

/**
 * Locum pharmacist
 * */
router.get("/locum-pharmacist/confirm-site", function (req, res, next) {
  // Reset any errors and copy it into the current template data
  if (req.session.data.errors) {
    res.locals.errors = req.session.data.errors;
  }
  req.session.data.errors = {};
  next();
});

router.post("/locum-pharmacist/confirm-site", function (req, res) {
  const locumSite = req.body["locum-site"];

  if (locumSite) {
    res.redirect("/locum-pharmacist/confirm-role");
  } else {
    req.session.data.errors = {};
    req.session.data.errors.locumSite = true;
    res.redirect("/locum-pharmacist/confirm-site");
  }
});

/**
 * Reasonable Adjustment Flags
 * */
router.get("/ra-flag_v5/ra-step-1", function (req, res, next) {
  // Reset any errors and copy it into the current template data
  if (req.session.data.errors) {
    res.locals.errors = req.session.data.errors;
  }
  req.session.data.errors = {};
  next();
});

router.post("/ra-flag_v5/ra-step-1", function (req, res) {
  const consent = req.body["consent"];
  const bestInterestDetail = req.body["best-interest-consent-input"];
  const otherConsentDetail = req.body["other-consent-input"];

  req.session.data.errors = {};

  // If there is no submitted option
  if (!consent) {
    req.session.data.errors["all"] = true;
    return res.redirect("/ra-flag_v5/ra-step-1");
  }

  if (consent === "best-interest") {
    if (!bestInterestDetail) {
      req.session.data.errors["best-interest-consent-input"] = true;
      return res.redirect("/ra-flag_v5/ra-step-1");
    }
  }

  if (consent === "other-consent") {
    if (!otherConsentDetail) {
      req.session.data.errors["other-consent-input"] = true;
      return res.redirect("/ra-flag_v5/ra-step-1");
    }
  }

  res.redirect("/ra-flag_v5/ra-step-2");
});

/**
 * Search
 * */
router.get("/search-v5/nhs-number-search", function (req, res, next) {
  // Reset any errors and copy it into the current template data
  if (req.session.data.errors) {
    res.locals.errors = req.session.data.errors;
  }
  req.session.data.errors = {};
  next();
});

router.post("/search-v5/nhs-number-search", function (req, res) {
  const nhsNumber = req.body["nhs-number"];

  req.session.data.errors = {};

  // If there is no submitted option
  if (!nhsNumber) {
    req.session.data.errors["nhs-number"] = true;
    return res.redirect("/search-v5/nhs-number-search");
  }

  res.redirect(`/search-v5/search-results?nhs-number=${nhsNumber}`);
});

router.get("/search-v5/basic-details-search", function (req, res, next) {
  // Reset any errors and copy it into the current template data
  if (req.session.data.errors) {
    res.locals.errors = req.session.data.errors;
  } else {
    // Reset form input, if no errors...
    delete req.session.data["gender"];
    delete req.session.data["last-name"];
    delete req.session.data["dob-day"];
    delete req.session.data["dob-month"];
    delete req.session.data["dob-year"];
  }
  req.session.data.errors = {};

  next();
});

function formatString(str) {
  return str
    .replace(/(\B)[^ ]*/g, (match) => match.toLowerCase())
    .replace(/^[^ ]/g, (match) => match.toUpperCase());
}

router.post("/search-v5/basic-details-search", function (req, res) {
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
    return res.redirect("/search-v5/basic-details-search");
  }

  // Format the data provided ready for processing
  req.session.data["basic-details-search"] = {};
  req.session.data["basic-details-search"]["patientGenderSearch"] = "Female";
  req.session.data["basic-details-search"]["patientLastNameSearch"] =
    formatString(lastName);
  req.session.data["basic-details-search"]["patientDobDaySearch"] = dobDay;
  req.session.data["basic-details-search"]["patientDobMonthSearch"] = dobMonth;
  req.session.data["basic-details-search"]["patientDobYearSearch"] = dobYear;

  var date = new Date(Date.UTC(dobYear, dobMonth - 1, dobDay));
  var dateOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  var formattedDob = date
    .toLocaleDateString("en-GB", dateOptions)
    .replace(/\s/g, "-");
  formattedDob;
  console.log({ date })
  req.session.data["basic-details-search"]["formattedDob"] = formattedDob;

  res.redirect(`/search-v5/search-results`);
});


router.get("/search-v5/advanced-details-search", function (req, res, next) {
  // Reset any errors and copy it into the current template data
  if (req.session.data.errors) {
    res.locals.errors = req.session.data.errors;
  }
  req.session.data.errors = {};
  next();
});

router.post("/search-v5/advanced-details-search", function (req, res) {
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
    return res.redirect("/search-v5/advanced-details-search");
  }


  req.session.data["advanced-details-search"] = {};
  req.session.data["advanced-details-search"]["patientGenderAdvanced"] = gender;
  req.session.data["advanced-details-search"]["patientFirstNameAdvanced"] = formatString(firstName);
  req.session.data["advanced-details-search"]["patientLastNameAdvanced"] =
    formatString(lastName);
  req.session.data["advanced-details-search"]["widenSearch"] = widenSearch;

  const patientPostcodeAdvancedUpper = addressPostcode.toUpperCase();
  const patientPostcodeAdvancedFormatted = patientPostcodeAdvancedUpper.replace(
    /\s/g,
    ""
  );
  req.session.data["advanced-details-search"][
    "patientPostcodeAdvancedFormatted"
  ] = patientPostcodeAdvancedFormatted;


  const fullDobFrom =
    dobDayFrom + "/" + dobMonthFrom + "/" + dobYearFrom;
  const dobFrom = moment(fullDobFrom, "DD-MM-YYYY").format("MM/DD/YYYY");
  req.session.data["advanced-details-search"]["dobFrom"] = dobFrom;

  const fullDobTo = dobDayTo + "/" + dobMonthTo + "/" + dobYearTo;
  const dobTo = moment(fullDobTo, "DD-MM-YYYY").format("MM/DD/YYYY");
  req.session.data["advanced-details-search"]["dobTo"] = dobTo;

  res.redirect(`/search-v5/search-results`);
});
router.get("/search-v5/postcode-search", function (req, res, next) {
  // Reset any errors and copy it into the current template data
  if (req.session.data.errors) {
    res.locals.errors = req.session.data.errors;
  }
  req.session.data.errors = {};

  next();
});

router.post("/search-v5/postcode-search", function (req, res) {
  const postcode = req.body["postcode-only"];
  req.session.data.errors = {};

  if (!postcode) {
    req.session.data.errors["postcode-only"] = true;
  }

  if (Object.keys(req.session.data.errors).length) {
    return res.redirect("/search-v5/postcode-search");
  }

  // Format the data provided ready for processing
  req.session.data["postcode-search"] = {};
  req.session.data["postcode-search"]["patientPostcodeOnly"] = postcode;

  res.redirect(`/search-v5/search-results`);
});

const patients = require('./data/patients-list.js');
router.get("/search-v5/patient-overview", function (req, res, next) {
  const nhsNumber = req.query['nhs-number'];
  res.locals.patient = patients[nhsNumber];
  next();
});

module.exports = router;
