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
    req.session.data.errors.locumSite = true;
    res.redirect("/locum-pharmacist/confirm-site");
  }
});

module.exports = router;
