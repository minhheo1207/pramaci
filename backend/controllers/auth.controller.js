const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../middleware/auth.middleware");

let USERS = [
  // seed admin: admin@pharmacy.com / admin123
  {
    id: 1,
    email: "admin@pharmacy.com",
    name: "Admin",
    role: "admin",
    passHash: bcrypt.hashSync("admin123", 10),
  },
  // seed user: demo@pharmacy.com / 123456
  {
    id: 2,
    email: "demo@pharmacy.com",
    name: "Demo User",
    role: "user",
    passHash: bcrypt.hashSync("123456", 10),
  },
];

function register(req, res) {
  const { email, name, password } = req.body || {};
  if (!email || !password)
    return res.status(400).json({ message: "email & password required" });
  if (USERS.some((u) => u.email === email))
    return res.status(409).json({ message: "Email already used" });

  const id = USERS.length ? Math.max(...USERS.map((u) => u.id)) + 1 : 1;
  const passHash = bcrypt.hashSync(password, 10);
  const user = {
    id,
    email,
    name: name || email.split("@")[0],
    role: "user",
    passHash,
  };
  USERS.push(user);

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    SECRET,
    { expiresIn: "7d" }
  );
  res
    .status(201)
    .json({ token, user: { id, email, name: user.name, role: user.role } });
}

function login(req, res) {
  const { email, password } = req.body || {};
  const user = USERS.find((u) => u.email === email);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  const ok = bcrypt.compareSync(password, user.passHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    SECRET,
    { expiresIn: "7d" }
  );
  res.json({
    token,
    user: { id: user.id, email: user.email, name: user.name, role: user.role },
  });
}

function profile(req, res) {
  const me = USERS.find((u) => u.id === req.user.id);
  res.json({ id: me.id, email: me.email, name: me.name, role: me.role });
}

function listUsers(req, res) {
  const list = USERS.map((u) => ({
    id: u.id,
    email: u.email,
    name: u.name,
    role: u.role,
  }));
  res.json(list);
}

module.exports = { register, login, profile, listUsers };
