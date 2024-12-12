import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import MainNav from "@/components/MainNav";

const Index = () => {
  return (
    <>
      <MainNav />
      <main className="pt-10"> {/* Reduced padding-top to match new header height */}
        <Hero />
        <Process />
        <Testimonials />
        <ContactForm />
      </main>
    </>
  );
};

export default Index;