import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
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
          description: "Your consultation request has been received. We'll contact you within 24 hours.",
        });
        (e.target as HTMLFormElement).reset();
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Ready to Start Earning?
          </h2>
          <form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            method="POST"
            data-netlify="true"
            name="Consultation Form"
          >
            <input type="hidden" name="form-name" value="Consultation Form" />
            
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" required />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" required />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book Your Free Consultation"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};