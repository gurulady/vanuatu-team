import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import TwoWays from './sections/TwoWays'
import ZoomInvitation from './sections/ZoomInvitation'
import Registration from './sections/Registration'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TwoWays />
      <ZoomInvitation />
      <Registration />
      <Footer />
    </main>
  )
}
