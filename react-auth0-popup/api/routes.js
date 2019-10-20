//npm stuff

const express = require("express");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const path = require("path");

//file imports

const allShows = require("./data/tvShows");
const allMovies = require("./data/movies");
const config = require("../api/data/config");

const router = express.Router();

//==================================================================//

//auth check function
const authCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: [config.AUDIENCE],
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithm: "RS256"
  });

//routes
// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../build/index.html"));
    
//   });
  
  router.get("/api/", (req, res) => {
    res.send("API is working");
  });
  
  router.get("/api/data/tvshows", (req, res) => {
    res.json(allShows);
  });
  
  router.get("/api/data/movies", authCheck, (req, res) => {
    res.json(allMovies);
  });




  module.exports = router;