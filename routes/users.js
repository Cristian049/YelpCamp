const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { storeReturnTo } = require("../middleware");
const users = require("../controllers/users");

const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

router
  .route("/register")
  .get(users.renderRegister)
  .post(wrapAsync(users.register));

router
  .route("/login")
  .get(users.renderLogin)
  .post(
    storeReturnTo,
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    users.login
  );

router;

router;

router.get("/logout", users.logout);

module.exports = router;
