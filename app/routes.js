// External dependencies
const express = require("express");
const router = express.Router();

// show all data store items in the terminal window
router.use((req, res, next) => {
  const log = {
    method: req.method,
    url: req.originalUrl,
    data: req.session.data,
    patients: req.session.patients,
  };
  // you can enable this in your .env file
  if (process.env.LOGGING === "TRUE") {
    console.log(JSON.stringify(log, null, 2));
  }
  next();
});

require("./views/ra-flag/routes.js")(router);
require("./views/search/routes.js")(router);
require("./views/ovm/routes.js")(router);

// Overview
require("./views/overviewtab/v1/routes.js")(router);
require("./views/overviewtab/v2/routes.js")(router);
require("./views/overviewtab/v3/routes.js")(router);

// Dev Mode - Used to show routing by scenario other than user driven

function devModeRoute(req, res, next) {
  if (!req.session.data["devMode"]) {
    console.log("no data found");
    var devMode = req.query.devMode;
    if (devMode === "true") {
      console.log("devmode detected");
      req.session.data["devMode"] = "true";
      console.log("local storage updated");
    } else {
      console.log("devmode not detected");
    }
  } else {
    console.log("data found and set to " + req.session.data["devMode"]);
  }
  next();
}

router.get("/*", devModeRoute);

module.exports = router;
