import { COMPANY } from '../data/products'
import SectionHeading from '../components/SectionHeading'

export default function Packaging() {
  return (
    <section>
      <div className="w ctr">
        <SectionHeading eyebrow="On the label" title="What the Packaging Says" />
        <div className="c3" style={{ textAlign: 'left' }}>
          <div className="st"><h3>PHARA Dagboru</h3><p>Herbal Action Bitters, 75cl.</p><p>Non-alcoholic. Good for men &amp; women.</p><div className="by">NAFDAC No: A7-103702L</div></div>
          <div className="st"><h3>PHARA Pile Plus</h3><p>Herbal Powder in an outer carton with individual sachets.</p><p>Marked “100% Herbs”.</p><div className="by">NAFDAC Reg No: A7-103701L</div></div>
          <div className="st" id="contact"><h3>Producer details</h3><p>Dagboru is labelled as produced by Faralokun Nationalist Cure, 1, Iyana Church, Iju Iyana Iyesi, Ogun State.</p><div className="by">WhatsApp orders: {COMPANY.whatsappDisplay}</div></div>
        </div>
      </div>
    </section>
  )
}
