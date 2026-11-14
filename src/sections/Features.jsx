import { BadgeCheck, Hash, Leaf, Package } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const FEATURES = [
  { Icon: Leaf, title: 'Herbal Products', text: 'Dagboru is a herbal bitters; Pile Plus is a herbal powder.' },
  { Icon: BadgeCheck, title: 'Non-Alcoholic', text: 'Dagboru Herbal Action Bitters is marked non-alcoholic on its label.' },
  { Icon: Package, title: 'Pack Formats', text: 'Dagboru comes in a 75cl bottle. Pile Plus comes in a carton of sachets.' },
  { Icon: Hash, title: 'NAFDAC Numbers', text: 'Dagboru: A7-103702L. Pile Plus: A7-103701L, as printed on the packs.' },
]

export default function Features() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="w ctr">
        <SectionHeading eyebrow="Straight from the packaging" title="What Makes It Special?" lead="A closer look at what the labels and packs show." />
        <div className="c4" style={{ textAlign: 'left' }}>
          {FEATURES.map(({ Icon, title, text }) => (
            <div className="fc" key={title}>
              <div className="ic2"><Icon size={18} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
