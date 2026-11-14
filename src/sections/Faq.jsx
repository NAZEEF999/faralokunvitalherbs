import FaqItem from '../components/FaqItem'

const FAQS = [
  ['How much are the products?', 'Dagboru: 1 bottle ₦12,000, 2 bottles ₦21,000, 3 bottles ₦30,000. Pile Plus: 1 pack ₦10,000, 2 packs ₦18,000, 3 packs ₦23,000.'],
  ['How do I order?', 'Pick a package above or build a combined order. WhatsApp opens with your message ready to send.'],
  ['Can I order both products together?', 'Yes. Choose quantities for each in the order builder and see the combined total before you send.'],
  ['Can I order more than three?', 'Our listed offers go up to three of each. Message us on WhatsApp for larger orders.'],
  ['What size is Dagboru?', 'One bottle is 75cl. Pile Plus is sold in packs of sachets.'],
  ['Do the products cure diseases?', 'No. Faralokun products are not presented as a cure, treatment or prevention for any disease. Speak to a qualified healthcare professional if you are unsure whether a product suits you.'],
]

export default function Faq() {
  return (
    <section>
      <div className="w two">
        <div>
          <div className="eb">Good to know</div>
          <h2>Frequently Asked Questions</h2>
          <p style={{ color: 'var(--mute)', marginTop: 12 }}>Clear answers about ordering, pack sizes and responsible use.</p>
        </div>
        <div className="faq"><div className="card">{FAQS.map(([q, a]) => <FaqItem key={q} q={q} a={a} />)}</div></div>
      </div>
    </section>
  )
}
