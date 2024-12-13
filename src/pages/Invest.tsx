import MainNav from "@/components/MainNav";
import { InvestmentForm } from "@/components/InvestmentForm";

export default function Invest() {
  return (
    <>
      <MainNav />
      <main className="pt-8 container mx-auto px-4">
        <InvestmentForm />
      </main>
    </>
  );
}