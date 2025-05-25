import { ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Investing = () => {
  const dividendDates = [
    { quarter: 'Q1', date: '30 de junio 2025' },
    { quarter: 'Q2', date: '30 de septiembre 2025' },
    { quarter: 'Q3', date: '31 de diciembre 2025' },
    { quarter: 'Q4', date: '31 de marzo 2026' }, // Corregido Q4 (antes era marzo 2025, debe ser del siguiente año)
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0a0f2c] to-[#0d153a] text-[#d0d8f6] flex flex-col">
      <Navbar />

      <main className="flex-1 p-8 mt-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#69a8ff]">Inversiones en Impulso</h1>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Avances de los primeros proyectos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>✔️ Desarrollo del juego "Impulso Racing" alcanzó su fase beta.</li>
            <li>✔️ Integración con exchanges descentralizados completada.</li>
            <li>✔️ Primeras 100 Yield Cards IMP distribuidas con éxito.</li>
            <li>✔️ Smart contracts de dividendos desplegados en mainnet.</li>
          </ul>
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
