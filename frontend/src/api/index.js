import { MOCK_CATEGORIES } from "../data/mockCategories";
import { MOCK_PRODUCTS } from "../data/mockProducts";

const USE_MOCK = true; // <-- đổi sang false để gọi backend thật

export async function getCategories() {
  if (USE_MOCK) return MOCK_CATEGORIES;
  const r = await fetch("/api/categories");
  if (!r.ok) throw new Error("Failed to fetch categories");
  return r.json();
}

export async function getProducts(categoryId) {
  if (USE_MOCK) {
    if (!categoryId || categoryId === 0) return MOCK_PRODUCTS;
    return MOCK_PRODUCTS.filter((p) => p.categoryId === Number(categoryId));
  }
  const url = categoryId
    ? `/api/products?categoryId=${categoryId}`
    : "/api/products";
  const r = await fetch(url);
  if (!r.ok) throw new Error("Failed to fetch products");
  return r.json();
}
