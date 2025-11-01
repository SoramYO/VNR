import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { TheorySection } from "@/components/theory-section"
import { LeadershipSection } from "@/components/leadership-section"
import { VictorySection } from "@/components/victory-section"
import { TimelineSection } from "@/components/timeline-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TheorySection />
      <LeadershipSection />
      <TimelineSection />
      <VictorySection />
      <Footer />
    </main>
  )
}
