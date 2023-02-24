// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// Passing data example
router.get('/examples/passing-data', function (req, res) {
  res.render('examples/passing-data/index')
});

// Branching example
router.post('/examples/branching/answer', function (req, res) {
  let nhsNumber = req.body.nhsNumber;

  if (nhsNumber === 'Yes') {
    res.redirect('/examples/branching/answer-yes')
  } else {
    res.redirect('/examples/branching/answer-no')
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
  
  if (consent === 'best-interest') {
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

  res.redirect(`/search-v5/search-results`);
});


module.exports = router;
