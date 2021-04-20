const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const UserModel = require('./models/UserModel');


module.exports = function(passport) {
  passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
    async (accessToken, resfreshToken, profile, done) =>{
      console.log(profile);
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    UserModel.findById(id, (err, user) => {
      done(err, user);
    });
  });

}


