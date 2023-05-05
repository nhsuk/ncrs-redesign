// External dependencies
const express = require("express");
const router = express.Router();

require("./views/ra-flag/routes.js")(router);
require("./views/search/routes.js")(router);

module.exports = router;
