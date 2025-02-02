import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Team from "../components/Team";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Team />
      <FAQ />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;