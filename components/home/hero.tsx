import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=2070')",
        }}
      />
      <div className="relative z-20 container py-32 md:py-40 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Tailoring Redefined
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mb-8">
          Your Personalized Garment, From Home to Delivery
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="/book">Book Your Tailor Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/how-it-works">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}