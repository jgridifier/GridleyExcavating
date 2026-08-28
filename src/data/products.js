export const PHONE = '(607) 962-0520'
export const PHONE_HREF = 'tel:+16079620520'
export const ADDRESS = '11244 River Road, Corning, NY 14830'
export const ADDRESS_MAP = 'https://maps.google.com/?q=11244+River+Road+Corning+NY+14830'
// Saturdays close for the season starting 8/29 — this flips automatically
// once that date arrives, so the site doesn't need a manual update.
const SATURDAY_CLOSURE_CUTOFF = '2026-08-29'
export const SATURDAY_CLOSURE_DATE = 'Saturday, August 29th'
export const SATURDAY_CLOSURE_SHORT = '8/29'
export function isSaturdayClosedForSeason(date = new Date()) {
  return date.toLocaleDateString('en-CA') >= SATURDAY_CLOSURE_CUTOFF
}

const saturdayClosed = isSaturdayClosedForSeason()

export const SATURDAY_HOURS = saturdayClosed
  ? { day: 'Saturday', time: 'Closed', note: "We're closed on Saturdays through the fall and winter season" }
  : { day: 'Saturday', time: '7:00 AM – 12:00 PM', note: `We'll be closed on Saturdays starting ${SATURDAY_CLOSURE_SHORT}, through the fall and winter season` }

export const HOURS = [
  { day: 'Monday – Friday', time: '7:00 AM – 4:00 PM' },
  SATURDAY_HOURS,
  { day: 'Sunday', time: 'Closed' },
]

// Home page "days a week" / hours-summary teasers — stay in sync with
// the Saturday closure above instead of being hardcoded.
export const OPEN_DAYS_PER_WEEK = saturdayClosed ? '5' : '6'
export const HOURS_SUMMARY = saturdayClosed
  ? 'Mon–Fri 7am–4pm'
  : 'Mon–Fri 7am–4pm · Sat 7am–12pm (Seasonal)'

// Prices change 9/1 — this flips automatically once that date arrives,
// same mechanism as the Saturday closure above.
const PRICE_CHANGE_CUTOFF = '2026-09-01'
export function isNewPricingActive(date = new Date()) {
  return date.toLocaleDateString('en-CA') >= PRICE_CHANGE_CUTOFF
}
const newPricing = isNewPricingActive()
export const PRICE_SHEET_UPDATED = newPricing ? '09/01/2026' : '07/26/2026'

// ── PRICING TIERS ──────────────────────────────────────────────────────
// Two separate real-world price sheets: retail customers buy "Up Top" by
// the yard, contractors buy at the pit by the ton (5-ton minimum).
export const PRICING_TIERS = [
  {
    key: 'retail',
    label: 'Retail',
    sublabel: 'By the Yard',
    audience: 'Homeowners & Landscapers',
    minNote: `${newPricing ? '$40' : '$30'} Minimum Load Charge · Plus Tax`,
  },
  {
    key: 'contractor',
    label: 'Contractor',
    sublabel: 'By the Ton',
    audience: '5-Ton Minimum',
    minNote: '5-Ton Minimum for Contractor Pricing · Plus Tax',
  },
]

// ── RETAIL (Up Top — sold by the yard) ─────────────────────────────────
const RETAIL_SOIL_CURRENT = [
  { name: 'Shed Topsoil', note: "Kept dry for the rainy days", price: '$41.76/yard', img: 'IMG_1337.jpg' },
  { name: 'Screened Topsoil', price: '$27.78/yard', img: 'IMG_0268.jpeg', imgPosition: 'center 25%' },
  { name: 'Garden Soil', price: '$50.95/yard' },
  { name: 'Unscreened Topsoil', price: '$12.00/yard' },
  { name: 'Overburden', price: '$9.00/yard' },
]
const RETAIL_SOIL_SEPT2026 = [
  { name: 'Shed Topsoil', note: "Kept dry for the rainy days", price: '$50.95/yard', img: 'IMG_1337.jpg' },
  { name: 'Screened Topsoil', price: '$37.41/yard', img: 'IMG_0268.jpeg', imgPosition: 'center 25%' },
  { name: 'Garden Soil', price: '$50.95/yard' },
  { name: 'Unscreened Topsoil', price: '$15.00/yard' },
  { name: 'Overburden', price: '$12.00/yard' },
]
export const RETAIL_SOIL = newPricing ? RETAIL_SOIL_SEPT2026 : RETAIL_SOIL_CURRENT

const RETAIL_MULCH_CURRENT = [
  { name: 'Double Ground Hardwood (Brown/Natural)', price: '$27.78/yard', img: 'IMG_1331.jpg' },
  { name: 'Double Ground Hardwood (Black)', price: '$32.41/yard', img: 'IMG_1333.jpg' },
  { name: 'Double Ground Hardwood (Red)', price: '$32.41/yard', img: 'IMG_1329.jpg' },
  { name: 'Playground Mulch', price: '$32.41/yard', img: 'IMG_1335.jpg' },
]
const RETAIL_MULCH_SEPT2026 = [
  { name: 'Double Ground Hardwood (Brown/Natural)', price: '$41.76/yard', img: 'IMG_1331.jpg' },
  { name: 'Double Ground Hardwood (Black)', price: '$41.76/yard', img: 'IMG_1333.jpg' },
  { name: 'Double Ground Hardwood (Red)', price: '$41.76/yard', img: 'IMG_1329.jpg' },
  { name: 'Playground Mulch', price: '$41.76/yard', img: 'IMG_1335.jpg' },
]
export const RETAIL_MULCH = newPricing ? RETAIL_MULCH_SEPT2026 : RETAIL_MULCH_CURRENT

const RETAIL_CRUSHED_STONE_CURRENT = [
  { name: '#1ST Crushed Stone (¼" to ½")', price: '$37.41/yard' },
  { name: '#1 Crushed Stone (½" to ¾")', price: '$27.78/yard', img: 'IMG_1351.jpg' },
  { name: '#2 Crushed Stone (¾" to 1¾")', price: '$27.78/yard', img: 'IMG_1353.jpg' },
  { name: '#57 Crushed Stone (#1 & #2 mix)', price: '$27.78/yard', img: 'IMG_1349.jpg' },
]
const RETAIL_CRUSHED_STONE_SEPT2026 = [
  { name: '#1ST Crushed Stone (¼" to ½")', price: '$46.31/yard' },
  { name: '#1 Crushed Stone (½" to ¾")', price: '$37.41/yard', img: 'IMG_1351.jpg' },
  { name: '#2 Crushed Stone (¾" to 1¾")', price: '$37.41/yard', img: 'IMG_1353.jpg' },
  { name: '#57 Crushed Stone (#1 & #2 mix)', price: '$37.41/yard', img: 'IMG_1349.jpg' },
]
export const RETAIL_CRUSHED_STONE = newPricing ? RETAIL_CRUSHED_STONE_SEPT2026 : RETAIL_CRUSHED_STONE_CURRENT

const RETAIL_ROUND_STONE_CURRENT = [
  { name: '#1 Round Stone (¼" to ½")', price: '$27.78/yard' },
  { name: '#1 & #2 Round Stone Mix', price: '$37.41/yard' },
  { name: '#3 Round Stone (2" to 3½")', price: '$27.78/yard', img: 'IMG_1355.jpg' },
  { name: 'Bones (3"–5")', price: '$37.41/yard' },
]
const RETAIL_ROUND_STONE_SEPT2026 = [
  { name: '#1 Round Stone (¼" to ½")', price: '$37.41/yard' },
  { name: '#1 & #2 Round Stone Mix', price: '$37.41/yard' },
  { name: '#3 Round Stone (2" to 3½")', price: '$37.41/yard', img: 'IMG_1355.jpg' },
  { name: 'Bones (5" plus)', price: '$46.31/yard' },
]
export const RETAIL_ROUND_STONE = newPricing ? RETAIL_ROUND_STONE_SEPT2026 : RETAIL_ROUND_STONE_CURRENT

const RETAIL_SAND_GRAVEL_CURRENT = [
  { name: 'Bedding/Road Sand', price: '$27.78/yard', img: 'IMG_1341.jpg' },
  { name: 'Concrete Sand', price: '$37.41/yard' },
  { name: 'Item #4', price: '$27.78/yard' },
  { name: 'Brown Crusher Run', price: '$37.41/yard' },
]
const RETAIL_SAND_GRAVEL_SEPT2026 = [
  { name: 'Bedding/Road Sand', price: '$37.41/yard', img: 'IMG_1341.jpg' },
  { name: 'Concrete Sand', price: '$46.31/yard' },
  { name: 'Item #4', price: '$37.41/yard' },
  { name: 'Brown Crusher Run', price: '$46.31/yard' },
]
export const RETAIL_SAND_GRAVEL = newPricing ? RETAIL_SAND_GRAVEL_SEPT2026 : RETAIL_SAND_GRAVEL_CURRENT

const RETAIL_SPECIALTY_CURRENT = [
  { name: 'Gray Crusher Run', price: '$67.50/yard', img: 'IMG_1347.jpg' },
  { name: '#1 Gray Stone', price: '$78.00/yard' },
  { name: 'Red Stone', price: '$175.00/yard' },
]
const RETAIL_SPECIALTY_SEPT2026 = [
  { name: 'Gray Crusher Run', price: '$77.50/yard', img: 'IMG_1347.jpg' },
  { name: '#1 Gray Stone', price: '$88.00/yard' },
  { name: 'Red Stone', price: '$175.00/yard' },
]
export const RETAIL_SPECIALTY = newPricing ? RETAIL_SPECIALTY_SEPT2026 : RETAIL_SPECIALTY_CURRENT

// ── CONTRACTOR (Gravel Pit Down Below — sold by the ton, 5-ton minimum) ─
const CONTRACTOR_CRUSHED_STONE_CURRENT = [
  { name: '#1ST Crushed Stone (¼" to ½")', price: '$21.50/ton' },
  { name: '#1A Crushed Stone (⅛" to ¼")', price: '$19.50/ton' },
  { name: '#1 Crushed Stone (½" to ¾")', price: '$17.00/ton', img: 'IMG_1351.jpg' },
  { name: '#2 Crushed Stone (¾" to 1¾")', price: '$17.50/ton', img: 'IMG_1353.jpg' },
  { name: '#3 Crushed Stone', price: '$23.50/ton' },
  { name: '#57 Crushed Stone (#1 & #2 mix)', price: '$17.25/ton', img: 'IMG_1349.jpg' },
]
const CONTRACTOR_CRUSHED_STONE_SEPT2026 = [
  { name: '#1ST Crushed Stone (¼" to ½")', price: '$21.50/ton' },
  { name: '#1A Crushed Stone (⅛" to ¼")', price: '$23.50/ton' },
  { name: '#1 Crushed Stone (½" to ¾")', price: '$18.50/ton', img: 'IMG_1351.jpg' },
  { name: '#2 Crushed Stone (¾" to 1¾")', price: '$18.50/ton', img: 'IMG_1353.jpg' },
  { name: '#3 Crushed Stone', price: '$23.50/ton' },
  { name: '#57 Crushed Stone (#1 & #2 mix)', price: '$18.50/ton', img: 'IMG_1349.jpg' },
]
export const CONTRACTOR_CRUSHED_STONE = newPricing ? CONTRACTOR_CRUSHED_STONE_SEPT2026 : CONTRACTOR_CRUSHED_STONE_CURRENT

const CONTRACTOR_ROUND_STONE_CURRENT = [
  { name: '#1 Round Stone (¼" to ½")', price: '$18.00/ton' },
  { name: '#1 & #2 Round Stone Mix (¼" to 1¼")', price: '$23.50/ton' },
  { name: '#3 Round Stone (1¼" to 2")', price: '$16.50/ton', img: 'IMG_1355.jpg' },
  { name: 'Bones (3"–5")', price: '$28.50/ton' },
]
const CONTRACTOR_ROUND_STONE_SEPT2026 = [
  { name: '#1 Round Stone (¼" to ½")', price: '$23.50/ton' },
  { name: '#1 & #2 Round Stone Mix (¼" to 1¼")', price: '$23.50/ton' },
  { name: '#3 Round Stone (1¼" to 2")', price: '$23.50/ton', img: 'IMG_1355.jpg' },
  { name: 'Bones (5" plus)', price: '$28.50/ton' },
]
export const CONTRACTOR_ROUND_STONE = newPricing ? CONTRACTOR_ROUND_STONE_SEPT2026 : CONTRACTOR_ROUND_STONE_CURRENT

const CONTRACTOR_SAND_GRAVEL_CURRENT = [
  { name: 'Bedding/Road Sand', price: '$12.25/ton', img: 'IMG_1341.jpg' },
  { name: 'Concrete Sand', price: '$23.50/ton' },
  { name: 'Sand Filter Sand', note: 'Steuben, Chemung & Schuyler County Approved', price: '$24.00/ton' },
  { name: 'Item #4', price: '$12.25/ton' },
  { name: 'Brown Crusher Run', price: '$23.50/ton' },
  { name: 'Gray Crusher Run', price: '$45.00/ton', img: 'IMG_1347.jpg' },
]
const CONTRACTOR_SAND_GRAVEL_SEPT2026 = [
  { name: 'Bedding/Road Sand', price: '$13.25/ton', img: 'IMG_1341.jpg' },
  { name: 'Concrete Sand', price: '$23.50/ton' },
  { name: 'Sand Filter Sand', note: 'Steuben, Chemung & Schuyler County Approved', price: '$24.00/ton' },
  { name: 'Item #4', price: '$12.25/ton' },
  { name: 'Brown Crusher Run', price: '$23.50/ton' },
  { name: 'Gray Crusher Run', price: '$55.00/ton', img: 'IMG_1347.jpg' },
]
export const CONTRACTOR_SAND_GRAVEL = newPricing ? CONTRACTOR_SAND_GRAVEL_SEPT2026 : CONTRACTOR_SAND_GRAVEL_CURRENT

const CONTRACTOR_SPECIALTY_CURRENT = [
  { name: '#1 Gray Stone', price: '$60.00/ton' },
]
const CONTRACTOR_SPECIALTY_SEPT2026 = [
  { name: '#1 Gray Stone', price: '$70.00/ton' },
]
export const CONTRACTOR_SPECIALTY = newPricing ? CONTRACTOR_SPECIALTY_SEPT2026 : CONTRACTOR_SPECIALTY_CURRENT

export const CONTRACTOR_YARD_ONLY_NOTE = 'Topsoil, mulch, and specialty stone are only sold by the yard — switch to Retail pricing above.'

// Downloadable price sheet PDFs also switch on the same cutoff.
export const RETAIL_PRICE_SHEET_PDF = newPricing ? 'RetailPriceSheet_Sept2026.pdf' : 'RetailPriceSheet.pdf'
export const CONTRACTOR_PRICE_SHEET_PDF = newPricing ? 'ContractorPriceSheet_Sept2026.pdf' : 'ContractorPriceSheet.pdf'

// "Starting from" teasers shown on the Home page — lowest retail/yard price in each category.
export const HOME_PRICE_HIGHLIGHTS = {
  gravel: newPricing ? 'From $37.41/yard' : 'From $27.78/yard',
  topsoil: newPricing ? 'From $12.00/yard' : 'From $9.00/yard',
  mulch: newPricing ? 'From $41.76/yard' : 'From $27.78/yard',
}

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
