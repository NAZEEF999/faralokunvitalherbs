import Logo from '../components/Logo'
import { COMPANY, GENERAL_MESSAGE, waLink } from '../data/products'

export default function Footer() {
  return (
    <footer>
      <div className="w">
        <div className="fr">
          <div>
            <Logo />
            <b>{COMPANY.name}</b>
            <a href={waLink(GENERAL_MESSAGE)} target="_blank" rel="noopener noreferrer">{COMPANY.whatsappDisplay}</a>
            <div className="fl"><a href="#products">Products</a><a href="#pricing">Pricing</a><a href="#about">About</a><a href="#contact">Contact</a></div>
          </div>
          <div className="rt"><b>Order through WhatsApp</b>Delivery and payment details are confirmed with you before you pay.</div>
        </div>
        <p className="dis">
          Information on this page is for general product information and is not medical advice. Faralokun products are not presented as a cure, treatment or prevention for disease. Herbal products may not be suitable for everyone. Consult a qualified healthcare professional if you have questions about whether a product is appropriate for you.
          <br />© {new Date().getFullYear()} {COMPANY.name}.
        </p>
      </div>
    </footer>
  )
}
