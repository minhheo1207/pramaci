const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "dev_secret_change_me";

function authGuard(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ message: "Missing token" });
  try {
    const payload = jwt.verify(token, SECRET);
    req.user = payload; // { id, email, role }
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

function isAdmin(req, res, next) {
  if (req.user?.role !== "admin")
    return res.status(403).json({ message: "Forbidden: admin only" });
  next();
}

module.exports = { authGuard, isAdmin, SECRET };
