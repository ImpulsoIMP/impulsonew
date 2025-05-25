import {
  Coins,
  Sprout,
  Gamepad2,
  ShoppingBag,
  Image,
  DollarSign,
  PiggyBank,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Staking",
      description: "Gana recompensas haciendo staking de tus tokens IMP",
      icon: Coins,
      href: "/Staking",
    },
    {
      title: "Farming",
      description: "Participa en yield farming con múltiples pools",
      icon: Sprout,
      href: "/Farming",
    },
    {
      title: "Juego",
      description: "Juega para ganar en nuestro ecosistema inmersivo",
      icon: Gamepad2,
      href: "https://dapp-impulso-hub-12.lovable.app/", external: true,
    },
    {
      title: "Tienda",
      description: "Compra artículos con tokens IMP",
      icon: ShoppingBag,
      href: "/Shop",
    },
    {
      title: "Mercado NFT",
      description: "Comercia con activos digitales únicos",
      icon: Image,
      href: "/marketNFT",
    },
    {
      title: "Apuestas",
      description: "Participa en apuestas seguras con cripto",
      icon: DollarSign,
      href: "/Betting",
    },
    {
      title: "Inversiones",
      description: "Haz crecer tu portafolio con IMP",
      icon: PiggyBank,
      href: "/Investing",
    },
  ];

  return (
    <div className="py-24 bg-midnight" id="ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nuestro Ecosistema
          </h2>
          <p className="text-bluegray max-w-2xl mx-auto">
            Explora las diversas características y oportunidades dentro del ecosistema Impulso
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <a
              key={feature.title}
              href={feature.href}
              className="group p-6 bg-navy/50 rounded-lg hover:bg-royal/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <feature.icon className="h-8 w-8 text-royal group-hover:text-bluegray transition-colors" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-bluegray">{feature.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
