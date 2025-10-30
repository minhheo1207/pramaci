import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import layout & components chung
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import các trang
import Home from "../pages/Home";
import KhuyenMai from "../pages/KhuyenMai";
import HangMoi from "../pages/HangMoi";
import BanChay from "../pages/BanChay";
import BaiViet from "../pages/BaiViet";
import DichVu from "../pages/DichVu";

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* HEADER cố định */}
      <Header />

      {/* NỘI DUNG CHÍNH */}
      <main style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/khuyen-mai" element={<KhuyenMai />} />
          <Route path="/hang-moi" element={<HangMoi />} />
          <Route path="/ban-chay" element={<BanChay />} />
          <Route path="/bai-viet" element={<BaiViet />} />
          <Route path="/dich-vu" element={<DichVu />} />
          {/* Trang không tồn tại */}
          <Route
            path="*"
            element={
              <div style={{ padding: 50, textAlign: "center" }}>
                <h2>404 - Trang không tồn tại</h2>
                <p>
                  Quay lại <a href="/">Trang chủ</a>
                </p>
              </div>
            }
          />
        </Routes>
      </main>

      {/* FOOTER cố định */}
      <Footer />
    </BrowserRouter>
  );
}
