const express = require("express");
const app = express();

// IMP FACTOR's - security , performance , edge cases
//CRUD -> GET, POST, PUT, DELETE
app.get("/", (req, res) => {
  //   res.sendStatus(200);
  //   res.sendStatus(201);
  //   res.sendStatus(400);
  //   res.sendStatus(500);
  //res.send("Hello");
  //   res.status(200).send("cool");
  //   res.status(500).send("db not connecting...");
});

app.get("/slash", (req, res) => {
  res.json({ a: 1 });
});

app.get("/products", (req, res) => {
  //   req.query = {
  //     limit: 50,
  //     q: "something",
  //   };
  res.send(req.query.limit);
});

// this query is use for both including / execluding b
// app.get("/ab?cd", (req, res) => {
//   res.send("abcd");
// });

// it means any no of b
// app.get("/ab+cd", (req, res) => {
//   res.send("abbbbbcd");
// });

// it means any number of characters in place of stars
// app.get("/ab*cd", (req, res) => {
//   res.send("************");
// });

// // cd can be include / execlude
// app.get("/ab?(cd)e", (req, res) => {
//   res.send("abcd");
// });

// Here regex starts
//only starts with a
// app.get(/a/, (req, res) => {
//   res.send("a");
// });

//
app.get("/user/:id/books/:bookId", (req, res) => {
  console.log(req.query);
  // the log will work for http://localhost:5000/user/1/books/2?text=hello
  res.send(req.params);
});

app.listen(5000);
