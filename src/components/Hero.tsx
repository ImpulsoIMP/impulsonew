import { ArrowRight, ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-midnight via-navy to-royal overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/ImpulsoIMP/Impulso/d00394ce303287456dd1cc1655af245e77741596/hero1-bg.jpg')] opacity-10 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 animate-fade-up">
          Bienvenido a{" "}
          <span className="bg-gradient-to-r from-royal to-bluegray text-transparent bg-clip-text">
            Impulso
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-bluegray mb-12 max-w-3xl mx-auto animate-fade-up">
          Descubre el futuro de los activos digitales con el token IMP. Únete a nuestro ecosistema
          de staking, farming, gaming y más.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <a
            href="https://raydium.io/swap/?inputMint=sol&outputMint=78kHXrS7sFnmEPyEH35Hpv5qLWaDsnpfEoBbWx1yrWFK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            Comprar IMP
            <ShoppingCart className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#ecosystem"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal hover:bg-royal/80 transition-colors"
          >
            Explorar Ecosistema
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="https://github.com/ImpulsoIMP/impulso-NEW/raw/main/public/Whitepaper%20de%20Impulso.pdf" target="_blank"
            className="inline-flex items-center px-8 py-3 border border-bluegray text-base font-medium rounded-md text-bluegray hover:text-white hover:border-white transition-colors"
          >
            Leer Whitepaper
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
