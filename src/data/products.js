import dagboru from '../assets/dagboru.jpg'
import pileplus from '../assets/pileplus.jpg'
import dagboru1 from '../assets/dagboru-1.jpg'
import dagboru2 from '../assets/dagboru-2.jpg'
import dagboru3 from '../assets/dagboru-3.jpg'
import pileplus1 from '../assets/pileplus-1.jpg'
import pileplus2 from '../assets/pileplus-2.jpg'
import pileplus3 from '../assets/pileplus-3.jpg'

// ---- Edit company details, products and prices here ----
export const COMPANY = {
  name: 'Faralokun Vital Herbs',
  tagline: '…Good Health, Naturally.',
  whatsappDisplay: '08030403521',
  whatsappIntl: '2348030403521',
}

export const PRODUCTS = [
  {
    id: 'dagboru',
    name: 'PHARA Dagboru',
    fullName: 'PHARA Dagboru Herbal Action Bitters',
    unit: ['bottle', 'bottles'],
    sizeNote: '75cl each',
    heading: 'PHARA Dagboru · 75cl bottles',
    selectorNote: 'Bottles (75cl)',
    image: dagboru,
    imagePosition: '50% 50%',
    tiers: [
      { qty: 1, price: 12000, image: dagboru1 },
      { qty: 2, price: 21000, image: dagboru2 },
      { qty: 3, price: 30000, image: dagboru3 },
    ],
  },
  {
    id: 'pileplus',
    name: 'PHARA Pile Plus',
    fullName: 'PHARA Pile Plus Herbal Powder',
    unit: ['pack', 'packs'],
    sizeNote: 'Herbal powder sachets',
    heading: 'PHARA Pile Plus · Packs',
    selectorNote: 'Packs',
    image: pileplus,
    imagePosition: '50% 35%',
    tiers: [
      { qty: 1, price: 10000, image: pileplus1 },
      { qty: 2, price: 18000, image: pileplus2 },
      { qty: 3, price: 23000, image: pileplus3 },
    ],
  },
]

export const formatNaira = (n) => '₦' + n.toLocaleString('en-NG')
export const unitLabel = (p, qty) => p.unit[qty > 1 ? 1 : 0]
export const priceFor = (p, qty) => (qty ? p.tiers.find((t) => t.qty === qty).price : 0)
export const lineText = (p, qty) => `${p.name}: ${qty} ${unitLabel(p, qty)} — ${formatNaira(priceFor(p, qty))}`

/** order = { dagboru: 0-3, pileplus: 0-3 } */
export const orderLines = (order) => PRODUCTS.filter((p) => order[p.id] > 0).map((p) => ({ product: p, qty: order[p.id], price: priceFor(p, order[p.id]) }))
export const orderTotal = (order) => orderLines(order).reduce((s, l) => s + l.price, 0)

export const buildMessage = (order) =>
  `Hello ${COMPANY.name}.\n\nI would like to place an order:\n\n` +
  orderLines(order).map((l) => lineText(l.product, l.qty)).join('\n') +
  `\n\nTotal: ${formatNaira(orderTotal(order))}\n\nPlease provide information on delivery and payment.\n\nThank you.`

export const waLink = (message) => `https://wa.me/${COMPANY.whatsappIntl}?text=${encodeURIComponent(message)}`
export const GENERAL_MESSAGE = `Hello ${COMPANY.name}. I would like to order PHARA Dagboru / PHARA Pile Plus. Please share details.`
