const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controllers/users.js");


//sign up
router.route("/signup")
.get(userController.renderSignUpForm)
.post(wrapAsync(userController.signup))

//log in
router.route("/login")
.get(userController.renderLogInForm)
.post(saveRedirectUrl,
    passport.authenticate("local",{failureRedirect : "/login" , failureFlash : true}),
    userController.login)

router.get("/logout",userController.logout)

module.exports = router;