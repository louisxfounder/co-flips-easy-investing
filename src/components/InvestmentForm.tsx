import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

export const InvestmentForm = () => {
  const { toast } = useToast();
  const [investmentType, setInvestmentType] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    toast({
      title: "Investment Request Received",
      description: "We'll contact you shortly to discuss your investment options.",
    });
  };

  return (
    <section className="py-12 px-4 md:py-20">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            Start Your Investment Journey
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>
            
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="New York" required />
            </div>
            
            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" placeholder="New York" required />
            </div>
            
            <div>
              <Label htmlFor="country">Country</Label>
              <Input id="country" placeholder="United States" required />
            </div>
            
            <div>
              <Label htmlFor="investmentType">Investment Type</Label>
              <Select onValueChange={setInvestmentType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select investment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="capital">Invest Capital</SelectItem>
                  <SelectItem value="sellHouse">Sell My House</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {investmentType === "capital" && (
              <div>
                <Label htmlFor="investmentSize">Investment Size</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select investment size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50000">$50,000</SelectItem>
                    <SelectItem value="100000">$100,000</SelectItem>
                    <SelectItem value="250000">$250,000</SelectItem>
                    <SelectItem value="1000000">$1,000,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Submit Investment Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};