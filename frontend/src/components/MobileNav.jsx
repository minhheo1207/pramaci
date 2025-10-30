import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";

/**
 * MobileNav
 * Props:
 *  - open: boolean (đang mở menu?)
 *  - onClose: function () => void (đóng menu)
 */
export default function MobileNav({ open = false, onClose = () => {} }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-overlay ${open ? "show" : ""}`}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,.35)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity .2s ease",
          zIndex: 998,
        }}
      />

      {/* Drawer */}
      <aside
        className="mobile-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: 300,
          maxWidth: "88vw",
          background: "#fff",
          boxShadow: "2px 0 12px rgba(0,0,0,.12)",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform .25s ease",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="mobile-nav__head"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 16px",
            borderBottom: "1px solid #eef3f3",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                background: "#00A6A0",
                color: "#fff",
                display: "grid",
                placeItems: "center",
                fontWeight: 700,
              }}
            >
              P
            </div>
            <strong>PharmaCity</strong>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng"
            style={{
              border: "none",
              background: "transparent",
              fontSize: 20,
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <nav className="mobile-nav__menu" style={{ padding: 8 }}>
          <MenuLink to="/" label="Trang chủ" onClose={onClose} />
          <MenuLink to="/khuyen-mai" label="Khuyến mãi" onClose={onClose} />
          <MenuLink to="/hang-moi" label="Hàng mới" onClose={onClose} />
          <MenuLink to="/ban-chay" label="Bán chạy" onClose={onClose} />
          <MenuLink to="/bai-viet" label="Bài viết" onClose={onClose} />
          <MenuLink to="/dich-vu" label="Dịch vụ" onClose={onClose} />
        </nav>

        <div
          style={{
            marginTop: "auto",
            padding: 12,
            borderTop: "1px solid #eef3f3",
          }}
        >
          <Link
            to="/gio-hang"
            onClick={onClose}
            className="btn primary"
            style={{ display: "block", textAlign: "center" }}
          >
            🛒 Xem giỏ hàng
          </Link>
        </div>
      </aside>
    </>
  );
}

/** Item helper */
function MenuLink({ to, label, onClose }) {
  return (
    <Link
      to={to}
      onClick={onClose}
      style={{
        display: "block",
        padding: "12px 14px",
        borderRadius: 10,
        color: "#045a56",
        textDecoration: "none",
      }}
      className="mobile-nav__item"
    >
      {label}
    </Link>
  );
}
