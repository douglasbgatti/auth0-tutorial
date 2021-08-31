const express = require("express");
const cors = require("cors");

const axios = require("axios");
const { default: verifyJwt } = require("./middlewares/verifyJwt");

const app = express();
app.use(cors());

// verifyJwt middleware
app.use(verifyJwt);

app.get("/unprotected", (req, res) => {
  res.send("unprotected route");
});

app.get("/protected", async (req, res) => {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    const { data: userInfo } = await axios.get(
      "https://dev-1yvjs6a3.us.auth0.com/userInfo",
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.send(userInfo);
  } catch (error) {
    res.send(error.message);
  }
});

app.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const msg = error.message || "Internal Server Error";

  res.status(status).send(msg);
});

app.listen(4000, () => console.log("Server is listening on port 4000"));
