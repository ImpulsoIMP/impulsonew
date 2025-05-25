import { ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Farming = () => {
  return (
 <div className="min-h-screen bg-gradient-to-r from-[#0a0f2c] to-[#0d153a] text-[#d0d8f6] flex flex-col">
      <Navbar />

      <main className="flex-1 p-8 mt-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#69a8ff]">MUY PRONTO</h1>
          <p className="mt-2">
            La revolución de la agricultura DeFi está por llegar a Impulso. 🌾
          </p>
          <p className="mt-2">
            Prepara tu cartera para cultivar rendimientos como nunca antes. ¡Muy pronto!
          </p>
        </header>
      </main>

      <Footer />
    </div>
  );
};
export default Farming;
