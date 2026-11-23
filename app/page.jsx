import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import Introduction from './sections/Introduction'
import TwoWays from './sections/TwoWays'
import VanuatuBeyond from './sections/VanuatuBeyond'
import ZoomInvitation from './sections/ZoomInvitation'
import Registration from './sections/Registration'
import Closing from './sections/Closing'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Introduction />
      <TwoWays />
      <VanuatuBeyond />
      <ZoomInvitation />
      <Registration />
      <Closing />
      <Footer />
    </main>
  )
}
