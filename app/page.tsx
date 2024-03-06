import HeroBanner from '@/components/HeroBanner'
import About from '@/components/About'
import ProductSection from '@/components/ProductSection'
import Volunteer from '@/components/Volunteer'
import Donate from '@/components/Donate'
import PodcastSection from '@/components/PodcastSection'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className=''>
      <HeroBanner />
      <About />
      <ProductSection />
      <PodcastSection />
      <Testimonials />
      <Volunteer />
      <Donate />
      <Contact />
    </main>
  )
}
