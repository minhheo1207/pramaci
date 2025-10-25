const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require("./routes/product.routes");
const categoryRoutes = require("./routes/category.routes");
const authRoutes = require("./routes/auth.routes");

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", authRoutes);

// Healthcheck
app.get("/api/health", (req, res) =>
  res.json({ ok: true, service: "pharmacy-backend" })
);

// 404 (phải đặt SAU các routes trên)
app.use((req, res) => res.status(404).json({ message: "Not found" }));

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log("Backend listening http://localhost:" + PORT)
);
