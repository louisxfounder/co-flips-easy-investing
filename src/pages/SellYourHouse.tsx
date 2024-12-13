import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, ClipboardCheck, HandshakeIcon, PiggyBank } from "lucide-react";
import MainNav from "@/components/MainNav";
import { Footer } from "@/components/Footer";
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
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop",
    title: "Turn Your Property into Maximum Profit",
    subtitle: "Partner with us to unlock your home's full potential without the hassle of renovations or contractor management.",
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    title: "We Handle Everything, You Share the Profits",
    subtitle: "From renovations to sale, our team manages the entire process while you simply wait for your enhanced returns.",
  },
  {
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2072&auto=format&fit=crop",
    title: "No Upfront Costs, Higher Returns",
    subtitle: "Skip the stress of renovation loans and contractor management. We invest in your property's transformation.",
  },
];

const SellYourHouse = () => {
  console.log("Rendering SellYourHouse page");
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
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-grow pt-8">
        {/* Hero Section with Carousel */}
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
                      Get Your Free Assessment
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

        {/* Rest of the content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">
                We're not just buying your home at a discount; we're partnering with you. We invest in the renovations and handle the entire flipping process. When your property sells, we split the profits. You get more money than a quick cash sale—without lifting a finger.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "Higher profits than a quick cash sale",
                  "No managing contractors or renovations",
                  "Transparent, fair agreements"
                ].map((point, index) => (
                  <Card key={index} className="bg-white">
                    <CardContent className="p-6 text-center">
                      <p className="text-gray-700">{point}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: ClipboardCheck,
                  title: "Free Property Assessment",
                  description: "Our team evaluates your home's potential and shows you the projected profits after a flip."
                },
                {
                  icon: HandshakeIcon,
                  title: "Co-Flip Agreement",
                  description: "We invest in renovations and manage the entire process, while you simply wait for the sale."
                },
                {
                  icon: PiggyBank,
                  title: "Share in the Profits",
                  description: "Once the home sells, we split the profits. You get more than a quick-sale offer, without the hassle."
                }
              ].map((step, index) => (
                <Card key={index} className="p-6">
                  <div className="text-center">
                    <step.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <blockquote className="max-w-2xl mx-auto text-center">
              <p className="text-xl text-gray-700 italic mb-4">
                "I was skeptical at first, but Co-Flips helped me earn significantly more than a cash offer. I never lifted a paintbrush, and they kept me informed every step of the way."
              </p>
            </blockquote>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              {[
                {
                  question: "Do I have to pay for renovations?",
                  answer: "No, we cover all upfront costs."
                },
                {
                  question: "What if the house doesn't sell?",
                  answer: "We carefully select properties and set realistic timelines. We share in the risk and work diligently to ensure a successful outcome."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-foreground mb-8">
              Ready for a Better Sale?
            </h2>
            <Button size="lg" variant="secondary">
              Get Your Free Assessment Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SellYourHouse;
