import Image from 'next/image'
import HeroBanner from '@/components/HeroBanner'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className=''>
      <HeroBanner />
      <About />
      <Footer />
    </main>
  )
}
