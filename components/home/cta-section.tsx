import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="container py-20">
      <div className="rounded-lg bg-primary/5 p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Ready for Your Perfect Fit?
        </h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto mb-8">
          Experience the luxury of custom tailoring with the convenience of home service
        </p>
        <Button size="lg" asChild>
          <Link href="/book" className="flex items-center gap-2">
            Book Your Appointment <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}