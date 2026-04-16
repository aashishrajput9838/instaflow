import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { Hero } from '@/components/hero'
import { DashboardPreview } from '@/components/dashboard-preview'
import { InfluencerSection } from '@/components/influencer-section'
import { FeaturesSection } from '@/components/features-section'
import { SocialProof } from '@/components/social-proof'
import { Testimonials } from '@/components/testimonials'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <div className="ml-64">
        <Hero />
        <DashboardPreview />
        <InfluencerSection />
        <FeaturesSection />
        <SocialProof />
        <Testimonials />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
