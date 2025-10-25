const { _CATEGORIES } = require("./category.controller");

let PRODUCTS = [
  {
    id: 1,
    name: "Paracetamol 500mg (10 tabs)",
    price: 18000,
    stock: 120,
    categoryId: 1,
  },
  {
    id: 2,
    name: "Vitamin C 1000mg (20 tabs)",
    price: 69000,
    stock: 40,
    categoryId: 2,
  },
  {
    id: 3,
    name: "Medical mask (box 50)",
    price: 39000,
    stock: 200,
    categoryId: 3,
  },
];

function getAll(req, res) {
  const { categoryId } = req.query;
  let list = PRODUCTS;
  if (categoryId) {
    const cid = Number(categoryId);
    list = PRODUCTS.filter((p) => p.categoryId === cid);
  }
  res.json(list);
}

function getById(req, res) {
  const id = Number(req.params.id);
  const item = PRODUCTS.find((p) => p.id === id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
}

function create(req, res) {
  const { name, price, stock, categoryId } = req.body || {};
  if (!name || typeof price !== "number")
    return res.status(400).json({ message: "name & price required" });

  if (
    categoryId !== undefined &&
    !_CATEGORIES.some((c) => c.id === Number(categoryId))
  ) {
    return res.status(400).json({ message: "Invalid categoryId" });
  }

  const id = PRODUCTS.length ? Math.max(...PRODUCTS.map((p) => p.id)) + 1 : 1;
  const newItem = {
    id,
    name,
    price,
    stock: Number(stock) || 0,
    categoryId: categoryId ? Number(categoryId) : null,
  };
  PRODUCTS.push(newItem);
  res.status(201).json(newItem);
}

function update(req, res) {
  const id = Number(req.params.id);
  const idx = PRODUCTS.findIndex((p) => p.id === id);
  if (idx === -1) return res.status(404).json({ message: "Not found" });

  const { name, price, stock, categoryId } = req.body || {};

  if (
    categoryId !== undefined &&
    !_CATEGORIES.some((c) => c.id === Number(categoryId))
  ) {
    return res.status(400).json({ message: "Invalid categoryId" });
  }

  PRODUCTS[idx] = {
    ...PRODUCTS[idx],
    ...(name !== undefined ? { name } : {}),
    ...(price !== undefined ? { price } : {}),
    ...(stock !== undefined ? { stock } : {}),
    ...(categoryId !== undefined ? { categoryId: Number(categoryId) } : {}),
  };
  res.json(PRODUCTS[idx]);
}

function remove(req, res) {
  const id = Number(req.params.id);
  const before = PRODUCTS.length;
  PRODUCTS = PRODUCTS.filter((p) => p.id !== id);
  if (PRODUCTS.length === before)
    return res.status(404).json({ message: "Not found" });
  res.status(204).end();
}

module.exports = { getAll, getById, create, update, remove };
