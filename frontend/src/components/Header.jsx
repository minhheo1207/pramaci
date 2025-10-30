import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";

export default function Header() {
  return (
    <>
      {/* Thanh trên cùng */}
      <div className="topbar">
        <div className="container wrap">
          <div className="left">
            <span className="chip">🚚 Miễn phí ship đơn từ 300K</span>
            <Link className="link" to="/dich-vu">
              Hệ thống cửa hàng
            </Link>
            <Link className="link" to="/dich-vu">
              Tra cứu đơn hàng
            </Link>
          </div>
          <div className="right">
            <span>
              📞 Hotline: <strong>1800 6821</strong>
            </span>
            <Link className="link" to="/dich-vu">
              Hỗ trợ
            </Link>
          </div>
        </div>
      </div>

      {/* Header chính */}
      <header>
        <div className="container header-main">
          <Link className="brand" to="/">
            <div className="logo">P</div>
            <div className="name">PharmaCity</div>
          </Link>

          <div className="actions" style={{ justifySelf: "end" }}>
            <Link className="action" to="#">
              📍 HCM
            </Link>
            <Link className="action" to="#">
              👤 Tài khoản
            </Link>
            <Link className="action" to="/gio-hang">
              🛒 Giỏ hàng
            </Link>
          </div>

          <form className="search" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Tìm thuốc, TPCN, thiết bị y tế..." />
            <button type="submit">Tìm</button>
          </form>
        </div>

        {/* Menu điều hướng */}
        <nav className="nav">
          <div className="container wrap">
            <Link to="/">Trang chủ</Link>
            <Link to="/khuyen-mai">Khuyến mãi</Link>
            <Link to="/hang-moi">Hàng mới</Link>
            <Link to="/ban-chay">Bán chạy</Link>
            <Link to="/bai-viet">Bài viết</Link>
            <Link to="/dich-vu">Dịch vụ</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
