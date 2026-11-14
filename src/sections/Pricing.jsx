import { PRODUCTS } from '../data/products'
import SectionHeading from '../components/SectionHeading'
import PricingCard from '../components/PricingCard'
import OrderBuilder from '../components/OrderBuilder'

export default function Pricing() {
  return (
    <section id="pricing" className="pr" style={{ paddingTop: 0 }}>
      <div className="w ctr">
        <SectionHeading eyebrow="Choose your pack" title="Simple, Honest Pricing" lead="Dagboru is priced per bottle. Pile Plus is priced per pack." />
        {PRODUCTS.map((p) => (
          <div key={p.id}>
            <h3 className="t">{p.heading}</h3>
            <div className="pcards" style={{ textAlign: 'left' }}>
              {p.tiers.map((t, i) => <PricingCard key={t.qty} product={p} tier={t} highlight={i === p.tiers.length - 1} />)}
            </div>
          </div>
        ))}
        <OrderBuilder />
      </div>
    </section>
  )
}
