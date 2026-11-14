import WhatsAppButton from './WhatsAppButton'

/** Sticky "Order on WhatsApp" bar shown on phones only (see .mob-bar in index.css). */
export default function MobileOrderBar() {
  return (
    <div className="mob-bar">
      <WhatsAppButton />
    </div>
  )
}
