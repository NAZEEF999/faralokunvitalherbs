import { GENERAL_MESSAGE, waLink } from '../data/products'

/** Opens WhatsApp with a prefilled message. The customer still has to press send. */
export default function WhatsAppButton({ message = GENERAL_MESSAGE, children = 'Order on WhatsApp →', className = '', disabled = false }) {
  return (
    <a
      className={`btn wa ${className}`}
      href={disabled ? '#' : waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-disabled={disabled}
    >
      {children}
    </a>
  )
}
