import WhatsAppButton from '../components/WhatsAppButton'
import { COMPANY } from '../data/products'

export default function Cta() {
  return (
    <div className="cta">
      <div className="w">
        <div className="eb" style={{ color: 'var(--gold)' }}>A natural choice for everyday wellness</div>
        <h2>Make Wellness Part of Your Routine</h2>
        <p>Explore PHARA Dagboru and PHARA Pile Plus and choose the package that works for you.</p>
        <br />
        <WhatsAppButton />
        <div className="ph">WhatsApp: {COMPANY.whatsappDisplay}</div>
      </div>
    </div>
  )
}
