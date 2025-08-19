import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import WorkStack from '@/components/WorkStack'
import BottomNav from '@/components/BottomNav'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main>
        <Hero />
        <WorkStack />
        <Services />
        <Projects />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
