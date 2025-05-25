import { ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Shop = () => {
    return (
    <div className="min-h-screen bg-gradient-to-r from-[#0a0f2c] to-[#0d153a] text-[#d0d8f6] flex flex-col">
      <Navbar />

      <main className="flex-1 p-8 mt-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#69a8ff]">MUY PRONTO</h1>
          <p className="mt-2">
            La tienda oficial de Impulso está por abrir sus puertas. 🛍️
          </p>
          <p className="mt-2">
            Prepárate para conseguir productos exclusivos y utilidades únicas con tus tokens.
          </p>
        </header>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
