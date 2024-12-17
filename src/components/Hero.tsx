import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    title: "Invest in Profitable Real Estate Flips—Without Lifting a Hammer",
    subtitle: "Partner with Co-Flips to access top-tier opportunities, expert management, and share in the profits—no hassles required.",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    title: "Expert Management, Maximum Returns",
    subtitle: "Let our experienced team handle everything while you focus on what matters—growing your wealth.",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    title: "Start Your Investment Journey Today",
    subtitle: "Join successful investors who trust Co-Flips for their real estate investments.",
  },
];

export const Hero = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      api.destroy();
    };
  }, [api]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 relative w-full h-[100svh]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/70" />
              </div>
              <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 max-w-4xl mx-auto animate-fadeIn"
                  style={{ animationDelay: "0.2s" }}
                >
                  {slide.title}
                </h1>
                <p 
                  className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fadeIn px-4"
                  style={{ animationDelay: "0.4s" }}
                >
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground animate-fadeIn text-sm sm:text-base w-full sm:w-auto max-w-xs mx-4"
                  style={{ animationDelay: "0.6s" }}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                current === index ? "bg-white w-4" : "bg-white/50"
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
        <CarouselPrevious className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </section>
  );
};
