import { formatNaira, priceFor } from '../data/products'

export default function QuantitySelector({ product, value, onChange }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <div className="nt">{product.selectorNote}</div>
      <div className="seg" role="group" aria-label={`${product.name} quantity`}>
        {[0, 1, 2, 3].map((n) => (
          <button key={n} type="button" aria-pressed={value === n} onClick={() => onChange(n)}>
            {n || 'None'}
            <small>{n ? formatNaira(priceFor(product, n)) : '—'}</small>
          </button>
        ))}
      </div>
    </div>
  )
}
