import WhatsAppButton from '../components/WhatsAppButton'
import showcase from '../assets/showcase.jpg'

export default function Nature() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="w nat">
        <img src={showcase} alt="Faralokun Vital Herbs product showcase" loading="lazy" />
        <div>
          <div className="eb">Rooted in nature</div>
          <h2>Nature-Inspired Herbal Wellness</h2>
          <p style={{ color: 'var(--mute)', margin: '18px 0 0' }}>Faralokun Vital Herbs offers PHARA Dagboru Herbal Action Bitters in a 75cl bottle and PHARA Pile Plus Herbal Powder in packs of sachets, each in its original packaging.</p>
          <ul className="ck"><li>75cl Dagboru bottle</li><li>Pile Plus sachet packs</li><li>Non-alcoholic Dagboru</li><li>Order on WhatsApp</li></ul>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}
