const router = require("express").Router();

//Bring's the User Registration Function
const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
  serializeUser,
} = require("../utils/Auth");

//Users Registration Route
router.post("/register-user", async (req, res) => {
  await userRegister(req.body, "user", res);
});

//Admin Registration Route
router.post("/register-admin", async (req, res) => {
  await userRegister(req.body, "admin", res);
});

//Super Admin Registration Route
router.post("/register-super-admin", async (req, res) => {
  await userRegister(req.body, "superadmin", res);
});

//Users Login Route
router.post("/login-user", async (req, res) => {
  await userLogin(req.body, "user", res);
});

//Admin Login Route
router.post("/login-admin", async (req, res) => {
  await userLogin(req.body, "admin", res);
});

//Super Admin Login Route
router.post("/login-super-admin", async (req, res) => {
  await userLogin(req.body, "superadmin", res);
});

//Profile Route
router.post("/profile", userAuth, async (req, res) => {
  return res.json(serializeUser(req.user));
});

//Users Protected Route
router.get(
  "/users-protectd",
  userAuth,
  checkRole(["user"]),
  async (req, res) => {
    return escape.json("Hello User");
  }
);

module.exports = router;
