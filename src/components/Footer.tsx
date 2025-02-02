const Footer = () => {
  return (
    <footer className="bg-midnight py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold text-royal">Impulso</span>
            <p className="mt-4 text-bluegray">
              El futuro de los activos digitales y las finanzas descentralizadas.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-bluegray hover:text-royal">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="text-bluegray hover:text-royal">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="text-bluegray hover:text-royal">
                  Comunidad
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Conectar</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://x.com/impulsoimp" className="text-bluegray hover:text-royal" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://t.me/ImpulsoIMP" className="text-bluegray hover:text-royal" target="_blank">
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://t.me/Impulso_IMP" className="text-bluegray hover:text-royal" target="_blank">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-navy">
          <p className="text-center text-bluegray">
            © {new Date().getFullYear()} Impulso. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
