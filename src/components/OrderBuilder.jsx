import { useState } from 'react'
import { PRODUCTS } from '../data/products'
import QuantitySelector from './QuantitySelector'
import OrderSummary from './OrderSummary'

export default function OrderBuilder() {
  const [order, setOrder] = useState({ dagboru: 0, pileplus: 0 })
  return (
    <div className="ob" id="order" style={{ textAlign: 'left' }}>
      {PRODUCTS.map((p) => (
        <QuantitySelector key={p.id} product={p} value={order[p.id]} onChange={(n) => setOrder((o) => ({ ...o, [p.id]: n }))} />
      ))}
      <OrderSummary order={order} />
    </div>
  )
}
