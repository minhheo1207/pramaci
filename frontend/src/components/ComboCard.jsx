import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";

/**
 * ComboCard
 * Props:
 *  - combo: {
 *      id, title, tag, image, to,
 *      items: [{ name, qty }], // tùy chọn, hiện danh sách mini
 *      price, oldPrice
 *    }
 *  - onAdd: (combo) => void   // tùy chọn
 */
export default function ComboCard({ combo = {}, onAdd = () => {} }) {
  const {
    id,
    title = "Combo ưu đãi",
    tag,
    image,
    to = "/khuyen-mai",
    items = [],
    price = 0,
    oldPrice,
  } = combo;

  return (
    <div className="card combo-card" data-id={id}>
      <Link to={to} className="thumb" style={{ display: "block" }}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          style={{ width: "100%", display: "block", borderRadius: 12 }}
        />
        {tag && <span className="badge">{tag}</span>}
      </Link>

      <div className="body">
        <Link
          to={to}
          className="title"
          style={{ textDecoration: "none", color: "#045a56" }}
        >
          <h4 style={{ margin: "6px 0" }}>{title}</h4>
        </Link>

        {items?.length > 0 && (
          <ul
            className="mini-list"
            style={{ margin: "6px 0 10px", paddingLeft: 18, color: "#555" }}
          >
            {items.slice(0, 3).map((it, idx) => (
              <li key={idx}>
                {it.name} {it.qty ? `× ${it.qty}` : ""}
              </li>
            ))}
            {items.length > 3 && <li>…</li>}
          </ul>
        )}

        <div
          className="price-row"
          style={{ display: "flex", alignItems: "baseline", gap: 8 }}
        >
          <strong className="price" style={{ color: "#00A6A0", fontSize: 18 }}>
            {formatVND(price)}
          </strong>
          {oldPrice ? (
            <span
              className="old"
              style={{ color: "#999", textDecoration: "line-through" }}
            >
              {formatVND(oldPrice)}
            </span>
          ) : null}
        </div>

        <div
          className="actions"
          style={{ display: "flex", gap: 8, marginTop: 10 }}
        >
          <button
            className="btn primary"
            onClick={() => onAdd(combo)}
            aria-label="Thêm combo vào giỏ"
          >
            Thêm giỏ hàng
          </button>
          <Link className="btn ghost" to={to}>
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
}

function formatVND(n) {
  try {
    return (n ?? 0).toLocaleString("vi-VN") + "đ";
  } catch {
    return "0đ";
  }
}
