import SectionHeading from '../components/SectionHeading'
import dagboru from '../assets/dagboru.jpg'
import pileplus from '../assets/pileplus.jpg'
import hero from '../assets/hero.jpg'

const CARDS = [
  { img: dagboru, alt: 'PHARA Dagboru Herbal Action Bitters bottle', kicker: 'Bottle', title: 'PHARA Dagboru', side: '75cl' },
  { img: pileplus, alt: 'PHARA Pile Plus carton and sachets', kicker: 'Pack', title: 'PHARA Pile Plus', side: 'Herbal Powder', pos: '50% 35%' },
  { img: hero, alt: 'PHARA Dagboru and Pile Plus together', kicker: 'Together', title: 'Dagboru + Pile Plus', side: 'Order both' },
]

export default function MeetProducts() {
  return (
    <section id="products" style={{ paddingTop: 0 }}>
      <div className="w ctr">
        <SectionHeading eyebrow="Meet the products" title="Faralokun, Your Way" lead="Choose Dagboru, Pile Plus or both, in the quantity that fits you." />
        <div className="c3" style={{ textAlign: 'left' }}>
          {CARDS.map((c) => (
            <div className="pc" key={c.title}>
              <img src={c.img} alt={c.alt} loading="lazy" style={c.pos ? { objectPosition: c.pos } : undefined} />
              <div>
                <span style={{ all: 'unset' }}><small>{c.kicker}</small><b>{c.title}</b></span>
                <span>{c.side}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
