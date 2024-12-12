import { CheckCircle2, Gem, PiggyBank } from "lucide-react";

const steps = [
  {
    title: "Connect & Review Opportunities",
    description: "Speak with our team, explore potential flips, and select the best deals for your portfolio.",
    icon: CheckCircle2,
  },
  {
    title: "Invest & Relax",
    description: "We handle the renovations, contractors, and timelines—while you stay informed through regular updates.",
    icon: Gem,
  },
  {
    title: "Profit & Reinvest",
    description: "When the property sells, you receive your share of the profits. Reinvest for even better terms or cash out.",
    icon: PiggyBank,
  },
];

export const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300"
            >
              <step.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-3 text-primary">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};