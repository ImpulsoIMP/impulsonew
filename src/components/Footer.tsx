const Footer = () => {
  return (
    <footer className="bg-midnight py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold text-royal">IMP</span>
            <p className="mt-4 text-bluegray">
              The future of digital assets and decentralized finance.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-bluegray hover:text-royal">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="text-bluegray hover:text-royal">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-bluegray hover:text-royal">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-bluegray hover:text-royal">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-bluegray hover:text-royal">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="text-bluegray hover:text-royal">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-navy">
          <p className="text-center text-bluegray">
            © {new Date().getFullYear()} Imulso. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;