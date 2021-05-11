const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');
const passport = require('passport');
const expressSession = require('express-session');


// const {OAuth2Client} = require('google-auth-library');
// const CLIENT_ID = process.env.CLIENT_ID;
// const client = new OAuth2Client(CLIENT_ID);

// Passport config
// require('./passport')(passport)

//Connect to Database
mongoose.connect(process.env.connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
.then((response)=>{console.log(`Successfully Connected to Database! \n Host: ${response.connection.host}`)})
.catch((err)=>{
  console.log(`DB Connection Error: ${err}`)
});

const app = express();

app.use(cors()); 

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json()); //contains parse JSON


//Express-Sessions
// app.use(expressSession({
//     secret: 'keyboard cat',
//     resave: false, //if resave = true, will always save, even if nothin is modified
//     saveUninitialized: false, //if false, save only when a session is initialized
//   })
// )


//Passport Middleware
// app.use(passport.initialize())
// app.use(passport.session())

//Routes
app.use(require('./routes/authController'));
app.use(require('./routes/notesController'));
app.use(require('./routes/loginController'));



//Set portname. In production it will use PORT from .env file, otherwise use 3001 (for development)
const PORTno = process.env.PORT || 3001;
app.listen(PORTno, ()=>{
  console.log(`Server running in ${JSON.stringify(process.env.NODE_ENV)} mode, on PORT:${PORTno}`)
});


//middleware function
// function checkAuthenticated(req, res, next){ 
//   let tokenId = req.cookies['sessiontoken'];
//   let user = {};
//   client.verifyIdToken({ idToken: tokenId, audience: CLIENT_ID })
//   .then((response)=>{
//     const payload = response.payload;
//     user.name = payload.name;
//     user.email = payload.email;
//     user.picture = payload.picture;
//   })
//   .then(()=>{
//     req.user = user;
//     next();
//   })
//   .catch((err)=>{
//     console.log("checkAuthenticated Error:", err);
//     res.redirect('/login');
//   })
// }