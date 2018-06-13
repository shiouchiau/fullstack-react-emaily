const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy; 
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    // user is the mongoose model user we created.
    done(null, user.id); // not profile id but the id mongo DB generated.
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => { 
        done(null, user);
    })
});

passport.use(
    // (options, accessToken)
    new GoogleStrategy({
        clientID: keys.googleClientID, // capital D is necessary
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true  // trust all proxy server default
    }, (accessToken, refreshToken, profile, done) => {  
        User.findOne({googleId: profile.id}).then((existingUser) => { // do a query, then return a promise
            if(existingUser) {
                done(null, existingUser);
            } else {
                new User({googleId: profile.id})
                    .save() // use save() persist to database
                    .then(user => done(null, user));
            }
        })
    })
);
