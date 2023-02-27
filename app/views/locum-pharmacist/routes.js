module.exports = (router) => {
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
}
