import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form submission started");

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      // Log form data for debugging
      console.log("Form data:", Object.fromEntries(formData));

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        console.log("Form submitted successfully");
        toast({
          title: "Success!",
          description: "Your consultation request has been received. We'll contact you within 24 hours.",
        });
        form.reset();
      } else {
        console.error("Form submission failed:", response);
        throw new Error(`Form submission failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
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
            name="consultation-form"
          >
            <input type="hidden" name="form-name" value="consultation-form" />
            
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                required 
                aria-required="true"
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="john@example.com" 
                required 
                aria-required="true"
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                placeholder="(555) 555-5555" 
                required 
                aria-required="true"
              />
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