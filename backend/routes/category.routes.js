const express = require("express");
const ctrl = require("../controllers/category.controller");
const { authGuard, isAdmin } = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getById);
router.post("/", authGuard, isAdmin, ctrl.create);
router.put("/:id", authGuard, isAdmin, ctrl.update);
router.delete("/:id", authGuard, isAdmin, ctrl.remove);

module.exports = router;
