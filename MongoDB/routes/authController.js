const express = require("express");
const router = express.Router();
const passport = require('passport');

//authenticate with Google
router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }) , ()=>{
  console.log("trying to get Google authentication working...")
})

//Google Auth Callback
router.get("/auth/google/callback", passport.authenticate('google', { failureRedirect: '/login' }), (req, res)=>{
  // res.redirect('/note-project');
});

//logout
// @desc    Logout user
// @route   /auth/logout
router.get('/auth/logout', (req, res) => {
  req.logout();
  // res.redirect('/note-project/login');
})


module.exports = router;
