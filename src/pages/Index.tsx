import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Process />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default Index;