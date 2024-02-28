import Image from 'next/image'
import HeroBanner from '../components/HeroBanner'
import About from '@/components/About'

export default function Home() {
  return (
    <main className=''>
      <HeroBanner />
      <About />
    </main>
  )
}
