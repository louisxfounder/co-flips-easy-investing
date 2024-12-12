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
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    title: "Invest in Profitable Real Estate Flips—Without Lifting a Hammer",
    subtitle: "Partner with Co-Flips to access top-tier opportunities, expert management, and share in the profits—no hassles required.",
  },
  {
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    title: "Expert Management, Maximum Returns",
    subtitle: "Let our experienced team handle everything while you focus on what matters—growing your wealth.",
  },
  {
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
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

    // Autoplay functionality
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      api.destroy();
    };
  }, [api]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
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
            <CarouselItem key={index} className="pl-0 relative w-full h-screen">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto animate-fadeIn"
                  style={{ animationDelay: "0.2s" }}
                >
                  {slide.title}
                </h1>
                <p 
                  className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fadeIn"
                  style={{ animationDelay: "0.4s" }}
                >
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground animate-fadeIn"
                  style={{ animationDelay: "0.6s" }}
                >
                  Get Started: Schedule a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
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
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </section>
  );
};