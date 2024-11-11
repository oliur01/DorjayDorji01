import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Testimonials } from "@/components/home/testimonials";
import { HowItWorks } from "@/components/home/how-it-works";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  );
}