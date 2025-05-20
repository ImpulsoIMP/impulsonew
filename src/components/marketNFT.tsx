import { ShoppingCart } from "lucide-react";

const MarketNFT = () => {
  const items = [
    {
      name: "NFT Impulso #1",
      image: "/impdrive.jpg",
      price: "1.2 SOL",
    },
    {
      name: "NFT Impulso #2",
      image: "/impcore.png",
      price: "0.8 SOL",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0a0f2c] to-[#0d153a] text-[#d0d8f6] p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#69a8ff]">Mercado de NFTs</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-[#0c1a4b] p-6 rounded-xl shadow-md border border-[#1e2d5c]">
            <img src={item.image} alt={item.name} className="w-full rounded mb-4" />
            <h2 className="text-xl font-bold text-[#89b4ff]">{item.name}</h2>
            <p className="my-2">{item.price}</p>
            <button className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-[#69a8ff] text-black rounded hover:bg-[#89b4ff] transition">
              Comprar <ShoppingCart size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketNFT;
