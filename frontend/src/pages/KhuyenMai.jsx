import React from "react";
import ProductCard from "../components/ProductCard";
import "../assets/css/khuyen-mai.css";

/** ẢNH NHÚNG (SVG -> data URI) */
const IMG_SALINE_COMBO = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <defs><linearGradient id='bg' x1='0' x2='1'><stop stop-color='%23EAF7FF'/><stop offset='1' stop-color='%23E6FFF8'/></linearGradient></defs>
  <rect width='600' height='400' fill='url(%23bg)'/>
  <g transform='translate(120,80)'>
    <g><rect x='18' y='0' width='60' height='28' rx='8' fill='%23D7E3F0'/><rect x='10' y='26' width='76' height='200' rx='14' fill='white' stroke='%23D1DFEC'/><rect x='20' y='60' width='56' height='80' rx='10' fill='%23E6F2FA'/></g>
    <g transform='translate(130,0)'><rect x='18' y='0' width='60' height='28' rx='8' fill='%23D7E3F0'/><rect x='10' y='26' width='76' height='200' rx='14' fill='white' stroke='%23D1DFEC'/><rect x='20' y='60' width='56' height='80' rx='10' fill='%23E6F2FA'/></g>
    <g transform='translate(260,0)'><rect x='18' y='0' width='60' height='28' rx='8' fill='%23D7E3F0'/><rect x='10' y='26' width='76' height='200' rx='14' fill='white' stroke='%23D1DFEC'/><rect x='20' y='60' width='56' height='80' rx='10' fill='%23E6F2FA'/></g>
  </g>
</svg>`;

const IMG_SHAMPOO = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <defs>
    <linearGradient id='bg' x1='0' x2='1'><stop stop-color='%23FFF4E6'/><stop offset='1' stop-color='%23FFE7CC'/></linearGradient>
    <linearGradient id='cap' x1='0' x2='0' y1='0' y2='1'><stop stop-color='%239C7F6B'/><stop offset='1' stop-color='%238D6E5B'/></linearGradient>
    <linearGradient id='bottle' x1='0' x2='0' y1='0' y2='1'><stop stop-color='%23FFF'/><stop offset='1' stop-color='%23F7F2EE'/></linearGradient>
  </defs>
  <rect width='600' height='400' fill='url(%23bg)'/>
  <g transform='translate(230,60)'>
    <rect x='40' y='0' width='120' height='26' rx='10' fill='url(%23cap)'/>
    <rect x='20' y='24' width='160' height='230' rx='30' fill='url(%23bottle)' stroke='%23E5D6C9'/>
    <rect x='40' y='80' width='120' height='80' rx='14' fill='%23F9EFE6'/>
    <text x='100' y='122' text-anchor='middle' font-family='Arial' font-size='16' fill='%23645'>Smooth Care</text>
  </g>
</svg>`;

const IMG_HAIR_DYE = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <defs><linearGradient id='bg' x1='0' x2='1'><stop stop-color='%23FFF0F2'/><stop offset='1' stop-color='%23FFE6EC'/></linearGradient></defs>
  <rect width='600' height='400' fill='url(%23bg)'/>
  <g transform='translate(210,70)'>
    <rect x='0' y='0' width='130' height='220' rx='14' fill='white' stroke='%23E9D1D6'/>
    <rect x='14' y='24' width='100' height='18' rx='6' fill='%23D88D5B' opacity='.9'/>
    <g transform='translate(140,10)'>
      <rect x='16' y='0' width='60' height='26' rx='8' fill='%23D88D5B'/>
      <rect x='8' y='24' width='76' height='200' rx='18' fill='white' stroke='%23E9D1D6'/>
    </g>
  </g>
</svg>`;

const IMG_FIRST_AID = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <defs><linearGradient id='bg' x1='0' x2='1'><stop stop-color='%23E8FFF8'/><stop offset='1' stop-color='%23E6F7FF'/></linearGradient></defs>
  <rect width='600' height='400' fill='url(%23bg)'/>
  <g transform='translate(200,90)'>
    <rect x='0' y='30' width='200' height='140' rx='24' fill='%23FF6B6B'/>
    <rect x='60' y='0' width='80' height='40' rx='16' fill='%23FF8A8A'/>
    <rect x='90' y='70' width='20' height='60' fill='white'/>
    <rect x='70' y='90' width='60' height='20' fill='white'/>
  </g>
</svg>`;

const IMG_TOOTHPASTE = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <defs><linearGradient id='bg' x1='0' x2='1'><stop stop-color='%23E9FFF5'/><stop offset='1' stop-color='%23E6F9FF'/></linearGradient></defs>
  <rect width='600' height='400' fill='url(%23bg)'/>
  <g transform='translate(245,60)'>
    <rect x='30' y='0' width='60' height='26' rx='8' fill='%2377D7C7'/>
    <rect x='20' y='24' width='80' height='220' rx='18' fill='white' stroke='%23CDEFE9'/>
    <rect x='34' y='70' width='52' height='70' rx='10' fill='%23E9FBF6'/>
    <text x='60' y='108' text-anchor='middle' font-family='Arial' font-size='12' fill='%2307A38D'>Mint</text>
  </g>
</svg>`;

/** Danh sách sản phẩm khuyến mãi */
const PROMO_PRODUCTS = [
  {
    id: 101,
    name: "Combo 3 chai nước muối sinh lý",
    price: 20000,
    oldPrice: 30000,
    image: IMG_SALINE_COMBO,
    tag: "Giảm 10.000₫",
    status: "Freeship nội thành",
  },
  {
    id: 102,
    name: "Dầu gội dưỡng tóc suôn mượt 330ml",
    price: 189070,
    oldPrice: 259000,
    image: IMG_SHAMPOO,
    tag: "Giảm 27%",
    status: "Chính hãng",
  },
  {
    id: 103,
    name: "Kem nhuộm tóc nâu ánh vàng",
    price: 103200,
    oldPrice: 129000,
    image: IMG_HAIR_DYE,
    tag: "Giảm 20%",
    status: "Sản phẩm mới",
  },
  {
    id: 104,
    name: "Túi sơ cứu Ultralight",
    price: 117900,
    oldPrice: 131000,
    image: IMG_FIRST_AID,
    tag: "Giảm 10%",
    status: "Tiện dụng",
  },
  {
    id: 105,
    name: "Kem đánh răng Whitening Mint",
    price: 198090,
    oldPrice: 279000,
    image: IMG_TOOTHPASTE,
    tag: "Giảm 29%",
    status: "Thơm mát",
  },
];

export default function KhuyenMai() {
  return (
    <main className="container section page-sale">
      <div className="head">
        <h2>🔥 Khuyến mãi hot</h2>
        <a href="/ban-chay">Xem thêm ›</a>
      </div>
      <div className="grid">
        {PROMO_PRODUCTS.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddToCart={(prod) => alert(`Đã thêm ${prod.name}`)}
          />
        ))}
      </div>
    </main>
  );
}
