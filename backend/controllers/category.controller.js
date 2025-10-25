let CATEGORIES = [
  { id: 1, name: "OTC - Non prescription" },
  { id: 2, name: "Vitamins" },
  { id: 3, name: "Medical devices" },
];

function getAll(req, res) {
  res.json(CATEGORIES);
}

function getById(req, res) {
  const id = Number(req.params.id);
  const item = CATEGORIES.find((c) => c.id === id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
}

function create(req, res) {
  const { name } = req.body || {};
  if (!name) return res.status(400).json({ message: "name required" });
  const id = CATEGORIES.length
    ? Math.max(...CATEGORIES.map((c) => c.id)) + 1
    : 1;
  const item = { id, name };
  CATEGORIES.push(item);
  res.status(201).json(item);
}

function update(req, res) {
  const id = Number(req.params.id);
  const idx = CATEGORIES.findIndex((c) => c.id === id);
  if (idx === -1) return res.status(404).json({ message: "Not found" });
  const { name } = req.body || {};
  if (name !== undefined) CATEGORIES[idx].name = name;
  res.json(CATEGORIES[idx]);
}

function remove(req, res) {
  const id = Number(req.params.id);
  const before = CATEGORIES.length;
  CATEGORIES = CATEGORIES.filter((c) => c.id !== id);
  if (CATEGORIES.length === before)
    return res.status(404).json({ message: "Not found" });
  res.status(204).end();
}

// Export thêm _CATEGORIES để product controller validate categoryId
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  _CATEGORIES: CATEGORIES,
};
