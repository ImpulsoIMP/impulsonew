import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MarketNFT from "@/components/marketNFT";
import Investing from '@/components/Investing';
import Staking from '@/components/Staking';
import Farming from '@/components/Farming';
import Shop from '@/components/Shop';
import Betting from '@/components/Betting';


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/marketNFT" element={<MarketNFT />} />
          <Route path="/investing" element={<Investing />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/farming" element={<Farming />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/betting" element={<Betting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
