import React from "react";
import ProductCard from "../components/ProductCard";
import "../assets/css/ban-chay.css";

/** ẢNH NHÚNG (SVG -> data URI) */
const IMG_THERMOMETER = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23E6FFF5'/>
  <g transform='translate(220,60)'>
    <rect x='60' y='0' width='60' height='200' rx='30' fill='white' stroke='%2300A6A0'/>
    <rect x='80' y='20' width='20' height='120' rx='10' fill='%2300A6A0' opacity='.8'/>
    <circle cx='90' cy='180' r='30' fill='%23FF6666'/>
  </g>
  <text x='300' y='360' text-anchor='middle' font-family='Arial' font-size='20' fill='%23333' font-weight='700'>
    Nhiệt kế điện tử đo trán
  </text>
</svg>`;

const IMG_MASK50 = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23EAF8FF'/>
  <g transform='translate(120,90)'>
    <rect x='0' y='0' width='200' height='140' rx='18' fill='white' stroke='%23C6E4FF'/>
    <path d='M20 70 Q100 30 180 70 L180 85 Q100 125 20 85 Z' fill='%2300A6A0' opacity='.8'/>
    <rect x='210' y='20' width='12' height='100' rx='6' fill='%2300A6A0' opacity='.35'/>
    <rect x='-22' y='20' width='12' height='100' rx='6' fill='%2300A6A0' opacity='.35'/>
  </g>
  <text x='300' y='360' text-anchor='middle' font-family='Arial' font-size='20' fill='%23333' font-weight='700'>
    Khẩu trang y tế 4 lớp (50 cái)
  </text>
</svg>`;

const IMG_BP = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23EAFBFA'/>
  <g transform='translate(170,90)'>
    <rect x='0' y='0' width='220' height='160' rx='22' fill='white' stroke='%2300A6A0' stroke-width='2'/>
    <rect x='20' y='20' width='180' height='40' rx='10' fill='%2300A6A0' opacity='.15'/>
    <circle cx='110' cy='100' r='34' fill='%2300A6A0' opacity='.85'/>
    <text x='110' y='106' text-anchor='middle' font-family='Arial' font-size='18' fill='white' font-weight='700'>120/80</text>
  </g>
  <rect x='360' y='120' width='80' height='120' rx='16' fill='%2399D6D3' opacity='.6'/>
  <rect x='352' y='130' width='96' height='12' rx='6' fill='%2300A6A0' opacity='.35'/>
  <text x='300' y='360' text-anchor='middle' font-family='Arial' font-size='20' fill='%23333' font-weight='700'>
    Máy đo huyết áp bắp tay
  </text>
</svg>`;

const IMG_SPF = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23FFECEF'/>
  <g transform='translate(240,60)'>
    <rect x='28' y='0' width='64' height='28' rx='8' fill='%23FF6E63'/>
    <rect x='20' y='26' width='80' height='220' rx='18' fill='white' stroke='%23FFD3D0'/>
    <circle cx='60' cy='95' r='20' fill='%23FF8A80' opacity='.85'/>
    <text x='60' y='101' text-anchor='middle' font-family='Arial' font-size='14' fill='white' font-weight='700'>SPF</text>
    <text x='60' y='118' text-anchor='middle' font-family='Arial' font-size='12' fill='white' font-weight='700'>50+</text>
    <rect x='32' y='150' width='56' height='10' rx='6' fill='%23FFF1F1'/>
    <rect x='32' y='168' width='56' height='10' rx='6' fill='%23FFF1F1'/>
  </g>
  <text x='300' y='360' text-anchor='middle' font-family='Arial' font-size='20' fill='%23333' font-weight='700'>
    Kem chống nắng SPF50+
  </text>
</svg>`;

const IMG_SANITIZER = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23EAFBFA'/>
  <g transform='translate(230,60)'>
    <rect x='40' y='0' width='120' height='26' rx='8' fill='%23A7E3E0'/>
    <rect x='20' y='24' width='160' height='230' rx='26' fill='white' stroke='%23C1F0ED'/>
    <text x='100' y='110' text-anchor='middle' font-size='18' fill='%2300A6A0' font-family='Arial' font-weight='700'>HAND</text>
    <text x='100' y='135' text-anchor='middle' font-size='16' fill='%2300A6A0' font-family='Arial' font-weight='700'>SANITIZER</text>
  </g>
  <text x='300' y='360' text-anchor='middle' font-family='Arial' font-size='20' fill='%23333' font-weight='700'>
    Gel rửa tay kháng khuẩn
  </text>
</svg>`;

/** Danh sách bán chạy */
const BEST_PRODUCTS = [
  {
    id: 301,
    name: "Nhiệt kế điện tử đo trán",
    price: 259000,
    oldPrice: 329000,
    image: IMG_THERMOMETER,
    tag: "Bán chạy",
    status: "Đo nhanh, chính xác",
  },
  {
    id: 302,
    name: "Khẩu trang y tế 4 lớp (50 cái)",
    price: 39000,
    oldPrice: 55000,
    image: IMG_MASK50,
    tag: "Giảm 15%",
    status: "Kháng khuẩn cao",
  },
  {
    id: 303,
    name: "Máy đo huyết áp bắp tay",
    price: 649000,
    oldPrice: 799000,
    image: IMG_BP,
    tag: "Bán chạy",
    status: "Hàng chính hãng",
  },
  {
    id: 304,
    name: "Kem chống nắng SPF50+",
    price: 169000,
    oldPrice: 219000,
    image: IMG_SPF,
    tag: "Ưa chuộng",
    status: "Bảo vệ toàn diện",
  },
  {
    id: 305,
    name: "Gel rửa tay kháng khuẩn",
    price: 59000,
    oldPrice: 79000,
    image: IMG_SANITIZER,
    tag: "Tiện dụng",
    status: "Diệt khuẩn 99.9%",
  },
];

export default function BanChay() {
  return (
    <main className="container section page-bestseller">
      <div className="head">
        <h2>🏆 Sản phẩm bán chạy</h2>
        <a href="/khuyen-mai">Xem ưu đãi ›</a>
      </div>
      <div className="grid">
        {BEST_PRODUCTS.map((p) => (
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
