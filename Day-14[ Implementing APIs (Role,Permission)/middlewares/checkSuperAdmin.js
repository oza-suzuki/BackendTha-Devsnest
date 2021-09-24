const check = (req, res, next) => {
  if (req.session.User.role === "superadmin") {
    res.status(200).send("success");
  } else {
    res.status(401).send("Needs to be super admin");
  }
};

module.exports = check;
