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
    .catch((error) => {
      console.log(error);
    });
});

// router.get('/logout', (req, res)=>{
//   console.log("attempting to clear cookies");
//   res.clearCookie();
//   req.logout();
// })

 
module.exports = router;