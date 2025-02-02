import { Users } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "John Doe",
      role: "CEO y Fundador",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      name: "Mike Johnson",
      role: "Desarrollador Principal",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
  ];

  const partners = [
    {
      name: "Raydium",
      role: "Socio de Intercambio",
      image: "https://github.com/ImpulsoIMP/impulso-NEW/raw/main/public/Cryptocurrency-Raydium-Logo-Graphics-15118885-1.jpg",
    },
    {
      name: "Solana",
      role: "Socio de Red",
      image: "https://github.com/ImpulsoIMP/impulso-NEW/raw/main/public/Solana_cryptocurrency_two.jpg",
    },
    {
      name: "Phantom",
      role: "Socio de Wallet",
      image: "https://github.com/ImpulsoIMP/impulso-NEW/raw/main/public/4850.sp3ow1.192x192.png",
    },
     {
      name: "DeFi Protocol",
      role: "Socio de Protocolo",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
  ];

  return (
    <div className="py-24 bg-navy" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nuestro Equipo y Socios
          </h2>
          <p className="text-bluegray max-w-2xl mx-auto">
            Conoce a los visionarios detrás de Impulso y nuestros socios estratégicos
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Equipo Principal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-midnight/50 rounded-lg p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-white text-center">
                  {member.name}
                </h4>
                <p className="text-bluegray text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Socios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-midnight/50 rounded-lg p-6">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-white text-center">
                  {partner.name}
                </h4>
                <p className="text-bluegray text-center">{partner.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
