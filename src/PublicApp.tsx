import { About } from './components/About'
import { ContactCTA } from './components/ContactCTA'
import { EnquiryModal } from './components/EnquiryModal'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { LocationSection } from './components/LocationSection'
import { MobileQuickDock } from './components/MobileQuickDock'
import { Navbar } from './components/Navbar'
import { ProcessTimeline } from './components/ProcessTimeline'
import { ReviewSection } from './components/ReviewSection'
import { Services } from './components/Services'
import { SpareParts } from './components/SpareParts'
import { StructuredData } from './components/StructuredData'
import { WhyChooseUs } from './components/WhyChooseUs'
import { EnquiryProvider } from './context/EnquiryContext'

export function PublicApp() {
  return (
    <EnquiryProvider>
      <StructuredData />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <SpareParts />
          <WhyChooseUs />
          <ProcessTimeline />
          <Gallery />
          <ReviewSection />
          <LocationSection />
          <ContactCTA />
        </main>
        <Footer />
        <MobileQuickDock />
        <EnquiryModal />
      </div>
    </EnquiryProvider>
  )
}
