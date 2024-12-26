import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import SellYourHouse from "./pages/SellYourHouse";
import Invest from "./pages/Invest";
import PropertyDisposition from "./pages/PropertyDisposition";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sell-your-house" element={<SellYourHouse />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/property-disposition" element={<PropertyDisposition />} />
            <Route path="/track-record" element={<Index />} /> {/* Placeholder */}
            <Route path="/opportunities" element={<Index />} /> {/* Placeholder */}
            <Route path="/portal" element={<Index />} /> {/* Placeholder */}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;