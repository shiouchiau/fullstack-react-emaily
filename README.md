# Fullstack React Emaily
Fullstack React web development with a course "[Node with React: Fullstack Web Development](https://www.udemy.com/node-with-react-fullstack-web-development)" from [Stephen Grider](https://github.com/StephenGrider).

See demo [here](https://limitless-forest-85384.herokuapp.com/).

## Feature Summarize
- Authentication with Google OAuth. Handling Passport callbacks and cookies for user login/logout, and connecting Mongoose to MLab Mongo DB.
- Handling payments with Stripe Serivice
- Production environment built in Heroku cloud application platform. 
- Use materilize for styling, a modern responsive CSS framework based on material design.

## Technology Use
- Frontend: React, Redux, Passport.js, Materialize 
- Backend: Express.js, Mongoose.js, Checkout.js(Stripe) 
- Service Provider: Heroku, MLab, Stripe

## Quick Start
1. Configuration of development key for Express server in file `config/dev.js`.
```
module.exports = {
    googleClientID: '',
    googleClientSecret: '',
    mongoURI: '',
    cookieKey: '',
    stripePublishableKey: '',
    stripeSecretKey: ''
}
```
2. Configuration of Stripe public key in `client/.env.development` for React side authentication.
```
REACT_APP_STRIPE_KEY
```
3. Install dependencies of both server and client side. 
```
$ npm install
```
4. Run command to build development environment 
```
$ npm run dev
```

