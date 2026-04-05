export const PHONE = '(607) 962-0520'
export const PHONE_HREF = 'tel:+16079620520'
export const ADDRESS = '11244 River Road, Corning, NY 14830'
export const ADDRESS_MAP = 'https://maps.google.com/?q=11244+River+Road+Corning+NY+14830'
export const HOURS = [
  { day: 'Monday – Friday', time: '7:00 AM – 4:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 12:00 PM', note: 'Seasonal' },
  { day: 'Sunday', time: 'Closed' },
]

export const GRAVEL = [
  { name: 'Item #4', price: '$12.25/ton' },
  { name: '#1A Crushed Stone (¼" to ½")', price: '$21.50/ton' },
  { name: '#1 Crushed Stone (½" to ¾")', price: '$17.00/ton', img: 'IMG_1351.jpg' },
  { name: '#2 Crushed Stone (¾" to 1¾")', price: '$17.50/ton', img: 'IMG_1353.jpg' },
  { name: '#57 Crushed Stone (#1 & #2 mix)', price: '$17.25/ton', img: 'IMG_1349.jpg' },
  { name: 'Bedding / Road Sand', price: '$12.50/ton', img: 'IMG_1341.jpg' },
  { name: '#1 Round Stone (¼" to ½")', price: '$18.00/ton' },
  { name: '#2 Round Stone (½" to ¾")', price: '$14.85/ton' },
  { name: '#3 Round Stone (1¼" to 2")', price: '$16.50/ton', img: 'IMG_1355.jpg' },
  { name: 'Bones (3"–5")', price: '$28.50/ton' },
  { name: 'Sand Filter Sand', note: 'Steuben, Chemung & Schuyler County Approved', price: '$24.00/ton' },
  { name: 'Red Stone', price: '$175.00/yard' },
  { name: '#1 Gray Stone', price: '$60.00/ton · $78.00/yard', img: 'IMG_1349.jpg' },
  { name: 'Gray Crusher Run', price: '$45.00/ton · $67.50/yard', img: 'IMG_1347.jpg' },
]

export const GRAVEL_YARD_NOTE = 'Most gravel products available at $30.00/yard (plus tax). Bones and #1A Crushed Stone excluded from yard pricing.'
export const MIN_LOADING = 'Minimum loading charge for pickup only: $30.00'

export const TOPSOIL = [
  { name: 'Screened Topsoil', price: '$27.78/yard', img: 'IMG_0268.jpeg', imgPosition: 'center 25%' },
  { name: 'SHED Topsoil', price: '$41.76/yard', img: 'IMG_1337.jpg' },
  { name: 'Overburden', price: '$9.00/yard' },
]

export const MULCH = [
  { name: 'Double Ground Hardwood (Brown / Natural)', price: '$27.78/yard', img: 'IMG_1331.jpg' },
  { name: 'Double Ground Black Mulch', price: '$32.41/yard', img: 'IMG_1333.jpg' },
  { name: 'Double Ground Red Mulch', price: '$32.41/yard', img: 'IMG_1329.jpg' },
  { name: 'Playground Mulch', price: '$32.41/yard', img: 'IMG_1335.jpg' },
]

export const DELIVERY = [
  { size: '4–5 yards / up to 5 tons', price: '$95.00', trucks: 'Trucks 7 & 23' },
  { size: '8–9 yards / up to 10 tons', price: '$110.00', trucks: 'Trucks 5 & 20 — Single Axle' },
  { size: '16–22 tons', price: '$135.00', trucks: 'Trucks 8, 21, 17, 19 — Tandem / Tri Axle' },
]
export const DELIVERY_NOTE = 'Delivery rates apply within 20 miles round trip.'

// Gallery images — order controls display priority
const base = import.meta.env.BASE_URL
export const GALLERY_IMAGES = [
  { src: `${base}images/new_4.JPG`, alt: 'Aerial view of gravel pit with CAT excavator' },
  { src: `${base}images/new_2.JPG`, alt: 'Aerial view of screening and crushing plant' },
  { src: `${base}images/new_3.jpg`, alt: 'Sandvik crusher at the quarry' },
  { src: `${base}images/new_1.jpg`, alt: 'Volvo excavator on job site' },
  { src: `${base}images/IMG_1383.jpg`, alt: 'Gridley Excavating sign with American flag' },
  { src: `${base}images/IMG_1375.jpg`, alt: 'Gridley yard with stone piles and mountains' },
  { src: `${base}images/IMG_1023.JPG`, alt: 'Gridley Excavating red dump truck' },
  { src: `${base}images/IMG_1365.jpg`, alt: 'Gridley yard with equipment and red barn' },
  { src: `${base}images/IMG_1379.jpg`, alt: '644K loader and red trucks at the yard' },
  { src: `${base}images/IMG_1035.JPG`, alt: 'Wide view of job site and mountain range' },
  { src: `${base}images/IMG_0278.jpeg`, alt: 'John Deere 644K wheel loader in barn' },
  { src: `${base}images/IMG_1030.JPG`, alt: 'Gravel yard with stone piles and red barn' },
  { src: `${base}images/IMG_1031.JPG`, alt: 'Material yard overview' },
  { src: `${base}images/IMG_1032.JPG`, alt: 'Stone piles at yard' },
  { src: `${base}images/IMG_1036.JPG`, alt: 'Gridley Excavating operations' },
  { src: `${base}images/IMG_1037.JPG`, alt: 'Gridley Excavating operations' },
  { src: `${base}images/IMG_1038.JPG`, alt: 'Gridley Excavating operations' },
  { src: `${base}images/IMG_1039.JPG`, alt: 'Gridley Excavating operations' },
  { src: `${base}images/IMG_1041.JPG`, alt: 'Gridley Excavating operations' },
  { src: `${base}images/IMG_1042.JPG`, alt: 'Gridley Excavating operations' },
  { src: `${base}images/IMG_1044.JPG`, alt: 'Gridley Excavating operations' },
  { src: `${base}images/IMG_0270.jpeg`, alt: 'Crusher equipment at job site' },
  { src: `${base}images/IMG_1190.jpg`, alt: 'Gridley Excavating site work' },
  { src: `${base}images/IMG_1191.jpg`, alt: 'Gridley Excavating site work' },
  { src: `${base}images/IMG_1192.jpg`, alt: 'Gridley Excavating site work' },
  { src: `${base}images/IMG_1193.jpg`, alt: 'Gridley Excavating site work' },
  { src: `${base}images/new_5.jpg`, alt: 'Gridley Excavating operations' },
  { src: `${base}images/new_6.jpg`, alt: 'Gridley Excavating operations' },
  { src: `${base}images/new_7.jpg`, alt: 'Gridley Excavating operations' },
  { src: `${base}images/new_8.jpg`, alt: 'Gridley Excavating operations' },
]
