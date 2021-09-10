const express = require("express");
const app = express();
// const bodyParser = require("body-parser");

//middlewares - it runs before your logic -> it's generally used in login, authorization system.
const checkAdmin = (req, res, next) => {
  // console.log("in first");
  if (req.query.auth === "ravi") {
    next();
  } else {
    res.status(401).send("should be admin");
  }
};

//if we want to add middlewares to all api's it must be declared after function created & before routes created.
// app.use(checkAdmin);

// -> it's been decprecated.
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sendRes = (req, res) => {
  res.status(200);
  res.json(req.query);
};

//browsers makes all get calls as stored in cache
//GET routes
app.get("/", sendRes);

//POST routes
app.post("/", (req, res) => {
  console.log("req.body--->", req.body);
  res.json({ text: req.body });
});

//PORT
app.listen(5000);
