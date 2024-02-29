import Image from 'next/image'
import HeroBanner from '@/components/HeroBanner'
import About from '@/components/About'
import Footer from '@/components/Footer'
import ProductSection from '@/components/ProductSection'
import Volunteer from '@/components/Volunteer'
import Donate from '@/components/Donate'
import PodcastSection from '@/components/PodcastSection'

export default function Home() {
  return (
    <main className=''>
      <HeroBanner />
      <About />
      <ProductSection />
      <PodcastSection />
      <Volunteer />
      <Donate />
    </main>
  )
}
