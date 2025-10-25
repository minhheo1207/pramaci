const express = require("express");
const {
  register,
  login,
  profile,
  listUsers,
} = require("../controllers/auth.controller");
const { authGuard, isAdmin } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authGuard, profile);
router.get("/users", authGuard, isAdmin, listUsers);

module.exports = router;
