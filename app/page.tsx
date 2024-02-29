import Image from 'next/image'
import HeroBanner from '@/components/HeroBanner'
import About from '@/components/About'
import Footer from '@/components/Footer'
import ProductSection from '@/components/ProductSection'

export default function Home() {
  return (
    <main className=''>
      <HeroBanner />
      <About />
      <ProductSection />
      <Footer />
    </main>
  )
}
