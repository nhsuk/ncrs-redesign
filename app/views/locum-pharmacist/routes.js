module.exports = (router) => {
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
