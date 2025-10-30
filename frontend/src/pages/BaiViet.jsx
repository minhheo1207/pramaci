import React from "react";
import "../assets/css/bai-viet.css";

/** SVG Thumbnail minh họa cho từng bài viết */
const IMG_VITAMIN_D = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23FFFBEA'/>
  <circle cx='300' cy='180' r='80' fill='%23FFD65A'/>
  <text x='300' y='190' text-anchor='middle' font-family='Arial' font-weight='700' font-size='36' fill='%23A86A00'>D</text>
</svg>`;

const IMG_BLOOD_PRESSURE = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23E6FFF5'/>
  <rect x='160' y='120' width='280' height='160' rx='20' fill='white' stroke='%2300A6A0'/>
  <circle cx='300' cy='200' r='50' fill='%2300A6A0' opacity='.85'/>
  <text x='300' y='208' text-anchor='middle' font-family='Arial' font-weight='700' font-size='22' fill='white'>BP</text>
</svg>`;

const IMG_ROUTINE = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23FFF0F8'/>
  <circle cx='300' cy='160' r='70' fill='%23FF9EC5'/>
  <rect x='250' y='230' width='100' height='12' rx='6' fill='%23FFCEE0'/>
  <rect x='240' y='250' width='120' height='12' rx='6' fill='%23FFCEE0'/>
  <rect x='260' y='270' width='80' height='12' rx='6' fill='%23FFCEE0'/>
</svg>`;

const POSTS = [
  {
    id: 401,
    category: "Dinh dưỡng",
    title: "5 dấu hiệu thiếu vitamin D",
    desc: "Cách bổ sung vitamin D an toàn và hiệu quả.",
    image: IMG_VITAMIN_D,
  },
  {
    id: 402,
    category: "Thiết bị y tế",
    title: "Chọn máy đo huyết áp",
    desc: "Nên chọn loại bắp tay hay cổ tay?",
    image: IMG_BLOOD_PRESSURE,
  },
  {
    id: 403,
    category: "Làm đẹp",
    title: "Routine tối giản",
    desc: "3 bước cơ bản mỗi ngày cho làn da khỏe.",
    image: IMG_ROUTINE,
  },
];

export default function BaiViet() {
  return (
    <main className="container section page-article">
      <div className="head">
        <h2>🩺 Góc sức khỏe</h2>
        <a href="/dich-vu">Xem tất cả ›</a>
      </div>
      <div className="grid grid-3">
        {POSTS.map((item) => (
          <article key={item.id} className="card-article">
            <div className="thumb">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="info">
              <small className="cat">{item.category}</small>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
