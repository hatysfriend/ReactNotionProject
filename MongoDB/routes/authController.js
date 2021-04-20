const express = require("express");
const router = express.Router();
const noteModel = require("../models/noteModel");
const passport = require('passport')

//authenticate with Google
router.get("/auth/google", passport.authenticate('google', { scope: ['profile'] }));

//Google Auth Callback
router.post("/auth/google/callback", passport.authenticate('google', { failureRedirect: '/login' }), (req, res)=>{
  res.redirect('/');
});


module.exports = router;
