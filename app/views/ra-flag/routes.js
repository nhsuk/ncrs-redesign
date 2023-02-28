module.exports = (router) => {
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
};