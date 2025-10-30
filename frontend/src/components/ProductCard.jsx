import React from "react";

export default function ProductCard({ product, onAddToCart }) {
  const { name, price, oldPrice, image, tag, status } = product;

  return (
    <div className="card product">
      <div className="thumb">
        <img src={image} alt={name} />
        {tag && <span className="badge">{tag}</span>}
      </div>

      <div className="body">
        <h4 className="name">{name}</h4>
        <div className="prices">
          <strong className="price">{price.toLocaleString("vi-VN")}₫</strong>
          {oldPrice && (
            <span className="old">{oldPrice.toLocaleString("vi-VN")}₫</span>
          )}
        </div>
        {status && <div className="status">{status}</div>}
        <button className="btn primary" onClick={() => onAddToCart(product)}>
          Chọn sản phẩm
        </button>
      </div>
    </div>
  );
}
