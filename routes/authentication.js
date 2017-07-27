const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("authentication/signup");
});

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/signup"
  })
);

// routes/authentication.js
router.get("/login", (req, res) => {
  res.render("authentication/login");
});

router.get("/signup", (req, res) => {
  res.render("authentication/signup");
});

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/signup"
  })
);

// routes/authentication.js
router.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

// routes/authentication.js
router.post("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// routes/authentication.js
router.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);
// routes/authentication.js
router.post("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
