import React from "react";
import ProductCard from "../components/ProductCard";
import "../assets/css/hang-moi.css";

const IMG_MASK = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23EAF8FF'/>
  <g transform='translate(150,80)'>
    <rect x='0' y='0' width='160' height='180' rx='20' fill='white' stroke='%23C6E4FF'/>
    <circle cx='80' cy='80' r='50' fill='%2300A6A0' opacity='.8'/>
    <path d='M60 75 L90 75 L75 105 Z' fill='white' opacity='.9'/>
  </g>
  <text x='300' y='360' text-anchor='middle' font-family='Arial' font-size='20' fill='%23333' font-weight='700'>
    Khẩu trang y tế 4 lớp
  </text>
</svg>`;

const IMG_THERMOMETER = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23E6FFF5'/>
  <g transform='translate(220,60)'>
    <rect x='60' y='0' width='60' height='200' rx='30' fill='white' stroke='%2300A6A0'/>
    <rect x='80' y='20' width='20' height='120' rx='10' fill='%2300A6A0' opacity='.8'/>
    <circle cx='90' cy='180' r='30' fill='%23FF6666'/>
  </g>
  <text x='300' y='360' text-anchor='middle' font-family='Arial' font-size='20' fill='%23333' font-weight='700'>
    Nhiệt kế điện tử
  </text>
</svg>`;

const IMG_MILK = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23FFFBEA'/>
  <g transform='translate(200,70)'>
    <rect x='0' y='0' width='200' height='220' rx='30' fill='white' stroke='%23FFD97C'/>
    <circle cx='100' cy='100' r='40' fill='%23FFD65A' opacity='.8'/>
    <text x='100' y='108' text-anchor='middle' font-size='22' fill='%23A86A00' font-family='Arial' font-weight='700'>Ca</text>
  </g>
  <text x='300' y='360' text-anchor='middle' font-family='Arial' font-size='20' fill='%23333' font-weight='700'>
    Sữa bổ sung Canxi
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

const IMG_CREAM = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23FFF0F8'/>
  <g transform='translate(240,60)'>
    <rect x='28' y='0' width='64' height='28' rx='8' fill='%23FF9EC5'/>
    <rect x='20' y='26' width='80' height='220' rx='18' fill='white' stroke='%23FFCEE0'/>
    <circle cx='60' cy='100' r='26' fill='%23FF9EC5' opacity='.85'/>
    <text x='60' y='106' text-anchor='middle' font-size='16' fill='white' font-family='Arial' font-weight='700'>Face</text>
  </g>
  <text x='300' y='360' text-anchor='middle' font-family='Arial' font-size='20' fill='%23333' font-weight='700'>
    Kem dưỡng da mặt
  </text>
</svg>`;

const NEW_PRODUCTS = [
  {
    id: 201,
    name: "Khẩu trang y tế 4 lớp",
    price: 35000,
    oldPrice: 45000,
    image: IMG_MASK,
    tag: "Mới",
    status: "Kháng khuẩn cao",
  },
  {
    id: 202,
    name: "Nhiệt kế điện tử",
    price: 199000,
    oldPrice: 239000,
    image: IMG_THERMOMETER,
    tag: "Hot",
    status: "Đo nhanh, chính xác",
  },
  {
    id: 203,
    name: "Sữa bổ sung Canxi",
    price: 78000,
    oldPrice: 95000,
    image: IMG_MILK,
    tag: "Mới ra mắt",
    status: "Tăng cường xương khớp",
  },
  {
    id: 204,
    name: "Gel rửa tay kháng khuẩn",
    price: 49000,
    oldPrice: 59000,
    image: IMG_SANITIZER,
    tag: "Bán chạy",
    status: "Diệt khuẩn 99.9%",
  },
  {
    id: 205,
    name: "Kem dưỡng da mặt",
    price: 125000,
    oldPrice: 159000,
    image: IMG_CREAM,
    tag: "Sản phẩm mới",
    status: "Dưỡng ẩm chuyên sâu",
  },
];

export default function HangMoi() {
  return (
    <main className="container section page-new">
      <div className="head">
        <h2>🆕 Hàng mới về</h2>
        <a href="/ban-chay">Xem thêm ›</a>
      </div>
      <div className="grid">
        {NEW_PRODUCTS.map((p) => (
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
