import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import MainNav from "@/components/MainNav";

const Index = () => {
  return (
    <>
      <MainNav />
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        <Hero />
        <Process />
        <Testimonials />
        <ContactForm />
      </main>
    </>
  );
};

export default Index;