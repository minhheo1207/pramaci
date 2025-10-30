import React from "react";
import "../assets/css/dich-vu.css";

const IMG_DELIVERY = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23EAF7FF'/>
  <g transform='translate(100,150)'>
    <rect x='0' y='30' width='400' height='100' rx='20' fill='%2300A6A0'/>
    <circle cx='90' cy='150' r='30' fill='%23333'/>
    <circle cx='310' cy='150' r='30' fill='%23333'/>
    <rect x='270' y='50' width='60' height='50' rx='8' fill='white'/>
  </g>
  <text x='300' y='70' text-anchor='middle' font-family='Arial' font-weight='700' font-size='24' fill='%23006666'>
    Giao hàng tận nơi
  </text>
</svg>`;

const IMG_CONSULT = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23E6FFF5'/>
  <circle cx='300' cy='150' r='60' fill='%2300A6A0'/>
  <rect x='180' y='240' width='240' height='80' rx='20' fill='white' stroke='%2300A6A0'/>
  <text x='300' y='258' text-anchor='middle' font-family='Arial' font-size='16' fill='%2300A6A0' font-weight='700'>
    Dược sĩ tư vấn
  </text>
</svg>`;

const IMG_STORE = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23E9FFF5'/>
  <rect x='120' y='120' width='360' height='160' rx='16' fill='white' stroke='%2300A6A0'/>
  <rect x='120' y='120' width='360' height='60' rx='16' fill='%2300A6A0' opacity='.85'/>
  <circle cx='180' cy='260' r='25' fill='%2300A6A0'/>
  <circle cx='420' cy='260' r='25' fill='%2300A6A0'/>
  <text x='300' y='155' text-anchor='middle' font-family='Arial' font-weight='700' font-size='20' fill='white'>
    Hệ thống cửa hàng
  </text>
</svg>`;

const SERVICES = [
  {
    id: 501,
    title: "🚚 Giao hàng tận nơi",
    desc: "Miễn phí giao đơn từ 300.000đ trong bán kính 5km.",
    image: IMG_DELIVERY,
  },
  {
    id: 502,
    title: "💊 Dược sĩ tư vấn 24/7",
    desc: "Hỗ trợ giải đáp thắc mắc, hướng dẫn sử dụng thuốc an toàn.",
    image: IMG_CONSULT,
  },
  {
    id: 503,
    title: "🏪 Hệ thống cửa hàng",
    desc: "Hơn 1.000 cửa hàng Pharmacity trên toàn quốc.",
    image: IMG_STORE,
  },
];

export default function DichVu() {
  return (
    <main className="container section page-service">
      <div className="head">
        <h2>💙 Dịch vụ & Hệ thống cửa hàng</h2>
        <a href="/index.html">Trang chủ ›</a>
      </div>
      <div className="grid grid-3">
        {SERVICES.map((s) => (
          <div key={s.id} className="card-service">
            <div className="thumb">
              <img src={s.image} alt={s.title} />
            </div>
            <div className="info">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
