import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, ClipboardCheck, HandshakeIcon, PiggyBank } from "lucide-react";
import MainNav from "@/components/MainNav";

const SellYourHouse = () => {
  console.log("Rendering SellYourHouse page");
  
  return (
    <>
      <MainNav />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fadeIn">
              Sell Your Home for More—Without Doing the Work
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Co-Flip your property with us and share in the increased profits. No stress, no low-ball wholesalers—just a fair, profitable sale.
            </p>
            <Button size="lg" variant="secondary" className="animate-fadeIn">
              See How Much You Can Earn
            </Button>
          </div>
        </section>

        {/* Value Proposition */}
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
    </>
  );
};

export default SellYourHouse;