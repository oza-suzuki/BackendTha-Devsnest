/*
 * level - 3
 * check if email already exists
 * password hash
 * email lowercase test@gmail.com / Test@gmail.com
 * save
 */

const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const register = async (req, res) => {
  //console.log(req.body);
  const { email, password } = req.body;

  try {
    //const alreadyExists = await User.findOne({ where: { email } });
    // const alreadyExists = await User.findOne({
    //   where: {
    //     login: req.body.login,
    //   },
    // });
    const alreadyExists = await User.findOne({ where: { email: email } });

    if (alreadyExists) {
      res.status(401).send("Email already exists.");
    } else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
        email: email.toLowerCase(),
        password: hash,
        fullName: "testUser",
      });
      const savedUser = await newUser.save();
      res.status(201).send(savedUser);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

const registerSuperAdmin = async (req, res) => {
  //console.log(req.body);
  const { email, password } = req.body;

  try {
    const alreadyExists = await User.findOne({ where: { email } });
    // const alreadyExists = await User.findOne({
    //   where: {
    //     login: req.body.login,
    //   },
    // });
    if (alreadyExists) {
      res.status(401).send("Email already exists.");
    } else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
        email: email.toLowerCase(),
        password: hash,
        fullName: "testUser",
        role: "super-admin",
      });
      const savedUser = await newUser.save();
      req.session.User = savedUser;
      res.status(201).send(savedUser);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports = { register, registerSuperAdmin };
