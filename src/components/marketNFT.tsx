import { ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MarketNFT = () => {
  const items = [
    {
      name: "IMP Start",
      image: "/impstar.png",
      price: "0.2% IMP",
      link: "https://launchmynft.io/sol/16469",
    },
    {
      name: "IMP Drive",
      image: "/impdrive.jpg",
      price: "0.4% IMP",
      link: "https://launchmynft.io/sol/16470",
    },
    {
      name: "IMP Core",
      image: "/impcore.png",
      price: "0.6% IMP",
      link: "https://launchmynft.io/sol/16471",
    },
    {
      name: "IMP Quantum",
      image: "/impquantum.png",
      price: "0.8% IMP",
      link: "https://example.com/compra/imp-quantum1",
    },
    {
      name: "IMP Genesis",
      image: "/impgenesis.png",
      price: "1.0% IMP",
      link: "https://launchmynft.io/sol/16474",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0a0f2c] to-[#0d153a] text-[#d0d8f6] flex flex-col">
      <Navbar />

      <main className="flex-1 p-8 mt-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#69a8ff]">Mercado de NFTs</h1>
          <p className="mt-2">Los primeros NFT del mercado que pagarán dividendos</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#0c1a4b] p-6 rounded-xl shadow-md border border-[#1e2d5c]"
            >
              <div className="h-48 w-full flex items-center justify-center overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-bold text-[#89b4ff]">{item.name}</h2>
              <p className="my-2">{item.price}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-[#69a8ff] text-black rounded hover:bg-[#89b4ff] transition"
              >
                Comprar <ShoppingCart size={18} />
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MarketNFT;
