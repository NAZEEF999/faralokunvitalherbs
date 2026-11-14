import { buildMessage, formatNaira, unitLabel } from '../data/products'
import WhatsAppButton from './WhatsAppButton'

export default function PricingCard({ product, tier, highlight }) {
  const message = buildMessage({ [product.id]: tier.qty })
  return (
    <div className={`pk${highlight ? ' hl' : ''}`}>
      {highlight && <span className="bd">Best value</span>}
      <img src={tier.image || product.image} alt={`${product.name}, ${tier.qty} ${unitLabel(product, tier.qty)}`} loading="lazy" />
      <div className="b">
        <span className="n">{tier.qty} {unitLabel(product, tier.qty)}</span>
        <span className="p">{formatNaira(tier.price)}</span>
        <span className="u">{product.sizeNote}</span>
        <WhatsAppButton message={message} />
      </div>
    </div>
  )
}
