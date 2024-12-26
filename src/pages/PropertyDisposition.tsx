import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { ShieldCheck, Users, LifeBuoy, Search, Calculator, User, Trophy, Building2, DollarSign, Repeat } from "lucide-react";
import MainNav from "@/components/MainNav";
import { Footer } from "@/components/Footer";

const PropertyDisposition = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
              Your Trusted Partner for Off-Market Real Estate Deals
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Licensed contractors dedicated to your success—because your success is ours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("properties")}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                View Available Properties
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 border-white"
              >
                Get Expert Guidance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Tired of Uncertainty When Buying Off-Market Properties?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Hidden Costs</h3>
                <p className="text-gray-600">No more surprises with unexpected repairs</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Unclear Margins</h3>
                <p className="text-gray-600">Know your profit potential upfront</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Lack of Guidance</h3>
                <p className="text-gray-600">Expert support every step of the way</p>
              </div>
            </div>
            <p className="text-lg text-primary">
              We simplify the process, pre-vet properties, and guide you to success.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Why Choose CoFlips Real Estate?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2">Licensed Expertise</h3>
              <p className="text-gray-600">Professional contractors you can trust</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2">Relationship-Driven</h3>
              <p className="text-gray-600">Building lasting partnerships</p>
            </div>
            <div className="text-center">
              <LifeBuoy className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2">Full-Service Support</h3>
              <p className="text-gray-600">Comprehensive assistance at every stage</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button
              onClick={() => scrollToSection("about")}
              variant="outline"
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50" id="process">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            A Simple, Transparent Process Designed for Long-Term Success
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Search, title: "Browse Properties", desc: "Explore our pre-vetted opportunities" },
              { icon: Calculator, title: "Analyze Numbers", desc: "Clear profit potential analysis" },
              { icon: User, title: "Expert Support", desc: "Guidance when you need it" },
              { icon: Trophy, title: "Achieve Success", desc: "Reach your investment goals" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <step.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">
              More Than Just Wholesalers—We're Partners in Your Success
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              As licensed contractors, we bring unmatched expertise to every deal. Our focus on
              transparency and long-term relationships sets us apart in the industry. We're not
              just here for a transaction—we're here to build lasting partnerships.
            </p>
            <p className="text-lg text-primary font-medium">
              Our mission is to build trust, foster lasting relationships, and ensure your
              success every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Additional Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Comprehensive Support for Every Step of Your Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2">Property Disposition</h3>
              <p className="text-gray-600">Expert guidance in property transactions</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2">Financing Guidance</h3>
              <p className="text-gray-600">Access to trusted lending partners</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <Repeat className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2">Refinancing Support</h3>
              <p className="text-gray-600">Optimize your investment strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Let's Build a Successful Partnership Today
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("properties")}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                View Available Properties
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 border-white"
              >
                Speak to an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDisposition;