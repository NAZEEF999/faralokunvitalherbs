import Navbar from '../components/Navbar'
import WhatsAppButton from '../components/WhatsAppButton'
import { COMPANY } from '../data/products'

export default function Hero() {
  return (
    <div className="hero" id="top">
      <div className="bg" />
      <div className="w">
        <Navbar />
        <div className="hc">
          <div className="eb">✦ Natural wellness, thoughtfully presented</div>
          <h1>Discover <em>PHARA</em> Dagboru &amp; Pile Plus</h1>
          <p>Herbal products from {COMPANY.name}: PHARA Dagboru Herbal Action Bitters and PHARA Pile Plus Herbal Powder.</p>
          <div className="chips"><span>Dagboru 75cl</span><span>Pile Plus Packs</span><span>Herbal Products</span></div>
          <WhatsAppButton />
          <div className="sub">Direct ordering with {COMPANY.name} · {COMPANY.whatsappDisplay}</div>
        </div>
      </div>
    </div>
  )
}
