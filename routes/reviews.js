const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync");
const {validateReview , isLoggedIn, isReviewAuthor} = require("../middleware");
const reviewController = require("../controllers/reviews");


//Reviews
//Review Post request
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview))

//Review delete Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview))

module.exports = router;