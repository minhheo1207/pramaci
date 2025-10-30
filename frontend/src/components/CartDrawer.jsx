import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";

/**
 * Drawer giỏ hàng (hiện khi click biểu tượng 🛒)
 * Props:
 * - open: boolean (true = mở)
 * - onClose: function() => void
 * - cartItems: [{id, name, price, quantity, image}]
 */
export default function CartDrawer({
  open = false,
  onClose = () => {},
  cartItems = [],
}) {
  const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${open ? "show" : ""}`}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,.4)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity .25s ease",
          zIndex: 998,
        }}
      />

      {/* Drawer */}
      <aside
        className="cart-drawer"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: 400,
          maxWidth: "94vw",
          height: "100vh",
          background: "#fff",
          boxShadow: "-3px 0 12px rgba(0,0,0,.1)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform .25s ease",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 18px",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <h3 style={{ margin: 0 }}>Giỏ hàng</h3>
          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              fontSize: 22,
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        {/* Danh sách sản phẩm */}
        <div style={{ flex: 1, overflowY: "auto", padding: 12 }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: "center", color: "#777", marginTop: 40 }}>
              🛒 Giỏ hàng trống
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  borderBottom: "1px solid #f3f3f3",
                  padding: "10px 0",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  style={{ objectFit: "cover", borderRadius: 8 }}
                />
                <div style={{ flex: 1 }}>
                  <strong>{item.name}</strong>
                  <div style={{ fontSize: 14, color: "#00A6A0" }}>
                    {item.price.toLocaleString()}đ × {item.quantity}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid #eee",
            padding: "16px 18px",
            background: "#fafafa",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <span>Tổng cộng:</span>
            <strong style={{ color: "#00A6A0" }}>
              {total.toLocaleString()}đ
            </strong>
          </div>

          <Link
            to="/thanh-toan"
            onClick={onClose}
            className="btn primary"
            style={{
              width: "100%",
              textAlign: "center",
              display: "block",
              padding: "10px 0",
            }}
          >
            Tiến hành thanh toán →
          </Link>
        </div>
      </aside>
    </>
  );
}
