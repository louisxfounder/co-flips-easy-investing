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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your investment request has been submitted successfully. We'll be in touch soon!",
        });
        (e.target as HTMLFormElement).reset();
        setInvestmentType("");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-4 md:py-20">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            Start Your Investment Journey
          </h2>
          <form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            method="POST"
            data-netlify="true"
            name="Investment Journey"
          >
            <input type="hidden" name="form-name" value="Investment Journey" />
            
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" required />
            </div>
            
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" name="city" placeholder="New York" required />
            </div>
            
            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" name="state" placeholder="New York" required />
            </div>
            
            <div>
              <Label htmlFor="country">Country</Label>
              <Input id="country" name="country" placeholder="United States" required />
            </div>
            
            <div>
              <Label htmlFor="investmentType">Investment Type</Label>
              <Select name="investmentType" onValueChange={setInvestmentType} required>
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
              <>
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

                <div>
                  <Label htmlFor="investmentGoal">Investment Goal</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your investment goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthlyCashflow">Monthly Cash Flow</SelectItem>
                      <SelectItem value="yearlyReturns">Yearly Returns</SelectItem>
                      <SelectItem value="longTermGrowth">Long Term Capital Growth</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Investment Request"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};