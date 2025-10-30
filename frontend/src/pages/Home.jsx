import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

/* ====== CSS (chọn 1 trong 3 tuỳ vị trí file của bạn) ====== */
// import "../assets/css/index.css";   // nếu bạn có: src/assets/css/index.css
// import "../../index.css";           // nếu index.css nằm ngoài src (cùng cấp thư mục src)
// import "../utils/index.css";        // nếu global css đang ở src/utils/index.css

/** Banner SVG (màu xanh Pharmacity) */
const BANNER_SVG = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 450'>
  <rect width='1200' height='450' fill='%2300A6A0'/>
  <circle cx='260' cy='220' r='110' fill='%23E0FFF7' opacity='0.2'/>
  <text x='250' y='180' font-size='42' fill='white' font-family='Arial' font-weight='700'>PharmaCity</text>
  <text x='250' y='230' font-size='22' fill='white' font-family='Arial'>Sức khỏe trong tầm tay bạn</text>
  <rect x='700' y='100' width='400' height='250' rx='30' fill='white' opacity='0.95'/>
  <text x='900' y='200' text-anchor='middle' font-size='26' font-weight='700' fill='%2300A6A0' font-family='Arial'>
    Ưu đãi tới 50%
  </text>
  <text x='900' y='240' text-anchor='middle' font-size='18' fill='%23006666' font-family='Arial'>
    Cho đơn hàng trên 300.000đ
  </text>
</svg>`;

/** Ảnh sản phẩm nhỏ minh họa */
const IMG_VITC = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'>
  <rect width='400' height='300' fill='%23E6FFF5'/>
  <circle cx='200' cy='130' r='60' fill='%23FFA500' opacity='.8'/>
  <text x='200' y='140' text-anchor='middle' font-size='28' font-weight='700' fill='white' font-family='Arial'>C</text>
</svg>`;

const IMG_MASK = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'>
  <rect width='400' height='300' fill='%23EAF7FF'/>
  <path d='M80 150 Q200 90 320 150 L320 170 Q200 210 80 170 Z' fill='%2300A6A0' opacity='.8'/>
</svg>`;

const IMG_ROUTINE = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'>
  <rect width='400' height='300' fill='%23FFF0F8'/>
  <circle cx='200' cy='130' r='50' fill='%23FF9EC5'/>
  <rect x='160' y='200' width='80' height='10' rx='5' fill='%23FFCEE0'/>
  <rect x='150' y='220' width='100' height='10' rx='5' fill='%23FFCEE0'/>
</svg>`;

/** Dữ liệu mẫu */
const PROMO = [
  {
    id: 1,
    name: "Vitamin C 1000mg",
    price: 95000,
    oldPrice: 120000,
    image: IMG_VITC,
    tag: "Giảm 25%",
  },
  {
    id: 2,
    name: "Khẩu trang y tế 4 lớp",
    price: 35000,
    oldPrice: 45000,
    image: IMG_MASK,
    tag: "Mới",
  },
];

const POSTS = [
  {
    id: 3,
    title: "Routine dưỡng da tối giản",
    desc: "3 bước cơ bản mỗi ngày",
    image: IMG_ROUTINE,
  },
];

/** Component chính */
export default function Home() {
  return (
    <main className="container section page-home">
      {/* Banner */}
      <section className="hero">
        <img src={BANNER_SVG} alt="Banner Pharmacity" className="hero-banner" />
      </section>

      {/* Ưu đãi hot */}
      <section className="promo">
        <div className="head">
          <h2>🔥 Khuyến mãi hot</h2>
          <Link to="/khuyen-mai">Xem thêm ›</Link>
        </div>
        <div className="grid">
          {PROMO.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onAddToCart={(p) => alert(`Đã thêm ${p.name}`)}
            />
          ))}
        </div>
      </section>

      {/* Góc sức khỏe */}
      <section className="blog">
        <div className="head">
          <h2>🩺 Góc sức khỏe</h2>
          <Link to="/bai-viet">Xem thêm ›</Link>
        </div>
        <div className="grid grid-3">
          {POSTS.map((post) => (
            <article key={post.id} className="card-article">
              <div className="thumb">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="info">
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
