import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "I earned a 35% profit on my first deal with Co-Flips—best real estate investment decision I've made.",
    author: "Sarah Johnson",
    role: "Angel Investor",
  },
  {
    quote: "Their team handles everything while keeping me informed. It's truly passive income at its finest.",
    author: "Michael Chen",
    role: "Real Estate Investor",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Investors Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary" fill="#FBC02D" />
                ))}
              </div>
              <p className="text-lg mb-4 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-300">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};