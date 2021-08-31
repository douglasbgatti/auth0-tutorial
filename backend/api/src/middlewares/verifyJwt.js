const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const verifyJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-1yvjs6a3.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "http://localhost:4000",
  issuer: "https://dev-1yvjs6a3.us.auth0.com/",
  algorithms: ["RS256"],
}).unless({ path: ["/unprotected"] });

exports.default = verifyJwt;
