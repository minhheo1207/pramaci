// Ảnh nhúng (SVG -> data URI) để hiển thị nhanh, không cần tải file ảnh.
const IMG_VITC = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <defs>
    <linearGradient id='bg' x1='0' x2='1'>
      <stop stop-color='%23F6FAFF'/><stop offset='1' stop-color='%23F2FFF9'/>
    </linearGradient>
    <linearGradient id='cap' x1='0' x2='0' y1='0' y2='1'>
      <stop stop-color='%23EDEDED'/><stop offset='1' stop-color='%23D9D9D9'/>
    </linearGradient>
    <linearGradient id='tube' x1='0' x2='0' y1='0' y2='1'>
      <stop stop-color='white'/><stop offset='1' stop-color='%23F7F7F7'/>
    </linearGradient>
    <linearGradient id='label' x1='0' x2='0' y1='0' y2='1'>
      <stop stop-color='%23FFC94A'/><stop offset='1' stop-color='%23FFB84D'/>
    </linearGradient>
  </defs>
  <rect width='600' height='400' fill='url(%23bg)'/>
  <g transform='translate(260,40)'>
    <rect x='22' y='8' width='56' height='22' rx='6' fill='url(%23cap)' stroke='%23CFCFCF'/>
    <rect x='20' y='30' width='60' height='260' rx='12' fill='url(%23tube)' stroke='%23E2E2E2'/>
    <rect x='22' y='130' width='56' height='110' rx='8' fill='url(%23label)'/>
    <rect x='22' y='130' width='56' height='110' rx='8' fill='none' stroke='%23EAA62A'/>
    <g transform='translate(48,40) rotate(-90)'>
      <text x='0' y='0' font-family='Arial' font-weight='700' font-size='16' fill='%23999'>VITAMIN</text>
    </g>
    <circle cx='50' cy='168' r='16' fill='white' opacity='.95'/>
    <text x='50' y='174' text-anchor='middle' font-family='Arial' font-weight='800' font-size='16' fill='%23FF8A00'>C+</text>
    <text x='50' y='210' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>1000mg</text>
    <circle cx='30' cy='70' r='3' fill='%23CCCCCC' opacity='.5'/>
    <circle cx='40' cy='60' r='2.5' fill='%23CCCCCC' opacity='.4'/>
    <circle cx='65' cy='68' r='2.5' fill='%23CCCCCC' opacity='.5'/>
  </g>
</svg>`;

const IMG_OMEGA = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <defs>
    <linearGradient id='bg' x1='0' x2='1'>
      <stop stop-color='%23E9F4FF'/><stop offset='1' stop-color='%23DFF2FF'/>
    </linearGradient>
    <linearGradient id='bottle' x1='0' x2='0' y1='0' y2='1'>
      <stop stop-color='%23FFF9E6'/><stop offset='1' stop-color='%23FFE6A3'/>
    </linearGradient>
    <linearGradient id='cap' x1='0' x2='0' y1='0' y2='1'>
      <stop stop-color='%2389B4F8'/><stop offset='1' stop-color='%236CA3F5'/>
    </linearGradient>
  </defs>
  <rect width='600' height='400' fill='url(%23bg)'/>
  <g transform='translate(230,70)'>
    <rect x='40' y='0' width='120' height='36' rx='10' fill='url(%23cap)'/>
    <rect x='20' y='30' width='160' height='220' rx='22' fill='url(%23bottle)' stroke='%23F2D07A'/>
    <rect x='30' y='56' width='140' height='80' rx='12' fill='white' opacity='.95'/>
    <text x='100' y='106' text-anchor='middle' font-family='Arial' font-size='18' fill='%23647'>OMEGA-3</text>
    <text x='100' y='128' text-anchor='middle' font-family='Arial' font-size='12' fill='%23777'>Fish Oil</text>
    <ellipse cx='70' cy='182' rx='18' ry='10' fill='%23FFC54D' opacity='.9'/>
    <ellipse cx='130' cy='192' rx='18' ry='10' fill='%23FFC54D' opacity='.7'/>
  </g>
</svg>`;

const IMG_BP = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <defs>
    <linearGradient id='bg' x1='0' x2='1'>
      <stop stop-color='%23EAFBFA'/><stop offset='1' stop-color='%23E6F5F4'/>
    </linearGradient>
  </defs>
  <rect width='600' height='400' fill='url(%23bg)'/>
  <g transform='translate(170,90)'>
    <rect x='0' y='0' width='220' height='160' rx='22' fill='white' stroke='%2300A6A0' stroke-width='2'/>
    <rect x='20' y='20' width='180' height='40' rx='10' fill='%2300A6A0' opacity='.15'/>
    <circle cx='110' cy='100' r='34' fill='%2300A6A0' opacity='.85'/>
    <text x='110' y='106' text-anchor='middle' font-family='Arial' font-size='18' fill='white' font-weight='700'>120/80</text>
  </g>
  <rect x='360' y='120' width='80' height='120' rx='16' fill='%2399D6D3' opacity='.6'/>
  <rect x='352' y='130' width='96' height='12' rx='6' fill='%2300A6A0' opacity='.35'/>
</svg>`;

const IMG_ZINC = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
  <rect width='600' height='400' fill='%23F4F6FF'/>
  <g transform='translate(210,70)'>
    <rect x='20' y='0' width='160' height='34' rx='10' fill='%23CDD0FF'/>
    <rect x='0' y='28' width='200' height='220' rx='22' fill='white' stroke='%23D8DAFF'/>
    <rect x='18' y='100' width='164' height='90' rx='12' fill='%238F8CF9'/>
    <text x='100' y='145' text-anchor='middle' font-family='Arial' font-size='16' fill='white' font-weight='700'>ZINC</text>
    <text x='100' y='166' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Gluconate</text>
    <text x='100' y='188' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>15 mg</text>
    <ellipse cx='60' cy='210' rx='16' ry='10' fill='%23BFC3FF' opacity='.9'/>
    <ellipse cx='140' cy='218' rx='16' ry='10' fill='%23BFC3FF' opacity='.7'/>
  </g>
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
</svg>`;

export const PRODUCTS = [
  {
    id: 1,
    name: "Viên sủi Vitamin C 1000mg",
    price: 69000,
    oldPrice: 99000,
    image: IMG_VITC,
    tag: "Giảm 20%",
    status: "Đang bán chạy",
  },
  {
    id: 2,
    name: "Omega-3 Fish Oil",
    price: 149000,
    oldPrice: 199000,
    image: IMG_OMEGA,
    tag: "Giảm 15%",
    status: "Đang bán chạy",
  },
  {
    id: 3,
    name: "Máy đo huyết áp bắp tay",
    price: 649000,
    oldPrice: 799000,
    image: IMG_BP,
    tag: "Bán chạy",
    status: "Hàng chính hãng",
  },
  {
    id: 4,
    name: "Kẽm Gluconate 15mg",
    price: 89000,
    oldPrice: 119000,
    image: IMG_ZINC,
    tag: "Hot",
    status: "Hỗ trợ miễn dịch",
  },
  {
    id: 5,
    name: "Kem chống nắng SPF50+",
    price: 169000,
    oldPrice: 219000,
    image: IMG_SPF,
    tag: "Best pick",
    status: "Bảo vệ toàn diện",
  },
];
