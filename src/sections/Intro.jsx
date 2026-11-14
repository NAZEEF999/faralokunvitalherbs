import { Heart } from 'lucide-react'

export default function Intro() {
  return (
    <section id="about">
      <div className="w two">
        <div>
          <div className="ic" aria-hidden="true"><Heart size={18} /></div>
          <div className="eb" style={{ marginTop: 14 }}>A gentler wellness routine</div>
        </div>
        <div>
          <h2 style={{ marginBottom: 22 }}>Are You Looking for a Natural Way to Support Your Wellness?</h2>
          <p>Sometimes you just want to take better care of yourself with products you can understand and trust.</p>
          <p>If you prefer herbal products, Faralokun Vital Herbs offers two PHARA products you can order directly on WhatsApp: Dagboru Herbal Action Bitters and Pile Plus Herbal Powder.</p>
          <p className="pq">Let’s take a closer look at what Faralokun Vital Herbs offers.</p>
        </div>
      </div>
    </section>
  )
}
