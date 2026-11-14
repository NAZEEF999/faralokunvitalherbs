import useScrollReveal from './hooks/useScrollReveal'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import WhyUs from './sections/WhyUs'
import Features from './sections/Features'
import MeetProducts from './sections/MeetProducts'
import Nature from './sections/Nature'
import Pricing from './sections/Pricing'
import Delivery from './sections/Delivery'
import Packaging from './sections/Packaging'
import Story from './sections/Story'
import Faq from './sections/Faq'
import Cta from './sections/Cta'
import Footer from './sections/Footer'
import MobileOrderBar from './components/MobileOrderBar'

export default function App() {
  useScrollReveal()
  return (
    <>
      <Hero />
      <Intro />
      <WhyUs />
      <Features />
      <MeetProducts />
      <Nature />
      <Pricing />
      <Delivery />
      <Packaging />
      <Story />
      <Faq />
      <Cta />
      <Footer />
      <MobileOrderBar />
    </>
  )
}
