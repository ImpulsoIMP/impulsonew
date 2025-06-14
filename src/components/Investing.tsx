import { ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Progress } from "@/components/ui/progress";

const Investing = () => {
  const dividendDates = [
    { quarter: 'Q1', date: '30 de junio 2025' },
    { quarter: 'Q2', date: '30 de septiembre 2025' },
    { quarter: 'Q3', date: '31 de diciembre 2025' },
    { quarter: 'Q4', date: '31 de marzo 2026' },
  ];

  const totalCards = 1010;
  const remainingCards = 1000;
  const collectedFunds = 500;
  const totalTarget = 107500;
  const investmentGrowth = 1000;

  const progressPercentage = (collectedFunds / totalTarget) * 100;
  const soldCards = totalCards - remainingCards;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0a0f2c] to-[#0d153a] text-[#d0d8f6] flex flex-col">
      <Navbar />

      <main className="flex-1 p-8 mt-24 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-[#69a8ff]">Inversiones en Impulso</h1>
        </header>

        <section className="bg-[#111c44] rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Estado actual de las Yield Cards</h2>
          <p className="mb-2">Total emitidas: <strong>{totalCards}</strong></p>
          <p className="mb-2">Vendidas: <strong>{soldCards}</strong></p>
          <p className="mb-4">Restantes: <strong>{remainingCards}</strong></p>
        </section>

        <section className="bg-[#111c44] rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Progreso de recaudación</h2>
          <p className="mb-2">Total a recaudar: <strong>${totalTarget.toLocaleString()}</strong></p>
          <p className="mb-2">Recaudado hasta ahora: <strong>${collectedFunds.toLocaleString()}</strong></p>
          <Progress value={progressPercentage} className="h-4 mt-4" />
        </section>

        <section className="bg-[#111c44] rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">¿Qué estamos haciendo con los fondos?</h2>
          <p className="mb-2">Para maximizar el retorno a nuestros holders, estamos diversificando las inversiones con estrategias de corto plazo.</p>
          <p className="mb-2">Hemos convertido los <strong>${collectedFunds}</strong> iniciales en <strong>${investmentGrowth}</strong>, un crecimiento del 100%.</p>
          <p>Esto permitirá pagar los primeros dividendos el <strong>30 de junio de 2025</strong> y continuar fortaleciendo nuestra Pool para futuros proyectos.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Próximas fechas de pago de dividendos</h2>
          <p className="mb-4">
            Los portadores de <strong>Yield Cards by Impulso (IMP)</strong> reciben dividendos cada 3 meses.
            A continuación se muestran las fechas previstas para los próximos pagos:
          </p>
          <table className="w-full table-auto border-collapse border border-gray-600 text-center">
            <thead>
              <tr className="bg-royal text-white">
                <th className="border border-gray-600 px-4 py-2">Trimestre</th>
                <th className="border border-gray-600 px-4 py-2">Fecha de Pago</th>
              </tr>
            </thead>
            <tbody>
              {dividendDates.map(({ quarter, date }) => (
                <tr key={quarter} className="bg-midnight/50">
                  <td className="border border-gray-600 px-4 py-2">{quarter}</td>
                  <td className="border border-gray-600 px-4 py-2">{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Investing;
