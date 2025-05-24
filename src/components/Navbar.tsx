import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Staking", href: "#staking" },
    { name: "Farming", href: "#farming" },
    { name: "Juegos", href: "https://dapp-impulso-hub.lovable.app/", external: true },
    { name: "Tienda", href: "#shop" },
    { name: "NFT Market", href: "/marketNFT" },
    { name: "Betting", href: "#betting" },
    { name: "Investments", href: "#investments" },
  ];

  return (
    <nav className="fixed w-full bg-midnight/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="https://impulso.on-fleek.app/" className="flex items-center">
              <img
                src="/lovable-uploads/b41fc22a-aeb8-47f7-96d9-ab08ba005cc2.png"
                alt="Impulso Logo"
                className="h-10 w-10 mr-2"
              />
              <span className="text-2xl font-bold text-royal">Impulso</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
             {menuItems.map((item) => (
  <a
    key={item.name}
    href={item.href}
    target={item.external ? "_blank" : undefined}
    rel={item.external ? "noopener noreferrer" : undefined}
    className="text-bluegray hover:text-royal px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {item.name}
  </a>
))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-bluegray hover:text-royal"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-midnight">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-bluegray hover:text-royal block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
