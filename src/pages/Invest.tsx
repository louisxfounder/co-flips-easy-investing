import MainNav from "@/components/MainNav";
import { InvestmentForm } from "@/components/InvestmentForm";
import { Footer } from "@/components/Footer";

export default function Invest() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-grow pt-8 container mx-auto px-4">
        <InvestmentForm />
      </main>
      <Footer />
    </div>
  );
}