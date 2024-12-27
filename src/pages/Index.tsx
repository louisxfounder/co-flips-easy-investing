import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { ContactForm } from "@/components/ContactForm";
import MainNav from "@/components/MainNav";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-grow pt-8">
        <Hero />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;