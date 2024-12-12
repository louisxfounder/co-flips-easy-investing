import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fadeIn">
            Invest in Profitable Real Estate Flips—Without Lifting a Hammer
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Partner with Co-Flips to access top-tier opportunities, expert management, and share in the profits—no hassles required.
          </p>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            Get Started: Schedule a Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};