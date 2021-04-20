const express = require("express");
const router = express.Router();
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = process.env.CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

router.post("/login", async (req, res) => {
  let tokenId = req.body.tokenId;
  console.log(`Token from login request: ${tokenId}`);

  client.verifyIdToken({ idToken: tokenId, audience: CLIENT_ID })
    .then((response)=>{
      const payload = response.payload;
      console.log("THE PAYLOAD:", payload);
      res.cookie('sessiontoken', tokenId); //create cookie
      res.send('success');
    })
    .catch(console.error);
});

// router.use('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });

router.get('/logout', (req, res)=>{
  res.clearCookie('session-token');
  res.redirect('/login');
})
 
module.exports = router;