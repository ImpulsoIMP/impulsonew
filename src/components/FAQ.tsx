import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué es Impulso (IMP)?",
      answer:
        "Impulso (IMP) es una criptomoneda innovadora que ofrece un ecosistema completo de servicios financieros descentralizados, incluyendo staking, farming, juegos, NFTs y más.",
    },
    {
      question: "¿Cómo puedo hacer staking con IMP?",
      answer:
        "Puedes hacer staking de tus tokens IMP a través de nuestra plataforma DeFi. Simplemente conecta tu wallet, elige el pool de staking y deposita tus tokens para empezar a ganar recompensas.",
    },
    {
      question: "¿Qué juegos están disponibles?",
      answer:
        "Ofrecemos una variedad de juegos play-to-earn donde puedes ganar tokens IMP. Nuestra plataforma incluye juegos de estrategia, aventura y casino, todos integrados con la blockchain.",
    },
    {
      question: "¿Existe un mercado NFT?",
      answer:
        "Sí, contamos con un marketplace NFT donde puedes comprar, vender y comerciar activos digitales únicos. Todos los NFTs están respaldados por la blockchain de Impulso.",
    },
    {
      question: "¿Cómo invertir sabiamente?",
      answer:
        "Recomendamos diversificar tu portafolio, investigar a fondo el proyecto, y solo invertir lo que puedas permitirte perder. También ofrecemos recursos educativos para ayudarte a tomar decisiones informadas.",
    },
  ];

  return (
    <div className="py-24 bg-midnight" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Sus preguntas respondidas
          </h2>
          <p className="text-bluegray">
            Encuentre respuestas a las preguntas más frecuentes sobre Impulso
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-navy/50 rounded-lg"
            >
              <AccordionTrigger className="px-6 text-white hover:text-royal">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-bluegray">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;