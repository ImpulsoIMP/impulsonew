import { Users, Coins } from "lucide-react";

const Stats = () => {
  return (
    <div className="py-24 bg-royal/10" id="stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-navy/50 rounded-lg p-8 flex items-center gap-4">
            <Users className="h-12 w-12 text-royal" />
            <div>
              <p className="text-4xl font-bold text-white">100K+</p>
              <p className="text-bluegray">Usuarios Activos</p>
            </div>
          </div>
          <div className="bg-navy/50 rounded-lg p-8 flex items-center gap-4">
            <Coins className="h-12 w-12 text-royal" />
            <div>
              <p className="text-4xl font-bold text-white">21M</p>
              <p className="text-bluegray">Suministro Total de Tokens</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;