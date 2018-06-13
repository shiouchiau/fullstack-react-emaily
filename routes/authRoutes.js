const passport = require('passport');
module.exports = app => {
    // tell service to run google oauth authentication flow 
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    // deal with callback from google server (the code variable)
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    // test if cookie session work well
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
}