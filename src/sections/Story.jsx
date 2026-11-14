import logo from '../assets/logo.jpg'

export default function Story() {
  return (
    <section className="dk" style={{ padding: '90px 0' }}>
      <div className="w story">
        <img src={logo} alt="Faralokun Vital Herbs logo" loading="lazy" />
        <div>
          <div className="eb">The Faralokun story</div>
          <h2>Good Health, Naturally.</h2>
          <p style={{ margin: '18px 0 12px' }}>Faralokun Vital Herbs brings the PHARA range together in one place: Dagboru Herbal Action Bitters and Pile Plus Herbal Powder.</p>
          <p>Whether you want one product or both, ordering is a single WhatsApp message away.</p>
        </div>
      </div>
    </section>
  )
}
