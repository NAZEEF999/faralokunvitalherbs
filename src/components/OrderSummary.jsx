import { buildMessage, formatNaira, orderLines, orderTotal, unitLabel } from '../data/products'
import WhatsAppButton from './WhatsAppButton'

export default function OrderSummary({ order }) {
  const lines = orderLines(order)
  const total = orderTotal(order)
  return (
    <div className="sum" aria-live="polite">
      <h3>Your order</h3>
      <ul>
        {lines.length ? lines.map((l) => (
          <li key={l.product.id}>
            <span>{l.product.name} × {l.qty} {unitLabel(l.product, l.qty)}</span>
            <b>{formatNaira(l.price)}</b>
          </li>
        )) : <li style={{ color: 'var(--mute)' }}>Choose a quantity to begin.</li>}
      </ul>
      <div className="tot"><span>Total</span><span key={total} className="bump">{formatNaira(total)}</span></div>
      <WhatsAppButton message={lines.length ? buildMessage(order) : ''} disabled={!lines.length}>Send order on WhatsApp →</WhatsAppButton>
      <p className="nt">WhatsApp opens with your message ready. Press send there to place your order.</p>
    </div>
  )
}
