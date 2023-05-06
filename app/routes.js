// External dependencies
const express = require("express");
const router = express.Router();

// show all data store items in the terminal window
router.use((req, res, next) => {
  const log = {
    method: req.method,
    url: req.originalUrl,
    data: req.session.data,
    patients: req.session.patients
  }
  // you can enable this in your .env file
  if (process.env.LOGGING === 'TRUE') {
    console.log(JSON.stringify(log, null, 2))
  }
  next()
})

require("./views/ra-flag/routes.js")(router);
require("./views/search/routes.js")(router);

module.exports = router;
