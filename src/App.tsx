import "./App.css";
import Navbar from "./component/navbar/Navbar";
import LaFabrikSection from "./component/laFabrikSection/LaFabrikSection";
import BlogsSection from "./component/blogsSection/BlogsSection";
import PartnersSection from "./component/partnersSection/PartnersSection";
import HeroSection from "./component/hero/HeroSection";
import NumbersSection from "./component/numberSection/NumbersSection";
import MissionsSection from "./component/missionsSection/MissionsSection";
import PourquoiNousSection from "./component/pourquoiNousSection/PourquoiNousSection";
import NosCompetencesSection from "./component/nosCompetences/NosCompetencesSection";
import FondateurSection from "./component/fondateurSection/FondateurSection";
import ContactSection from "./component/contactSection/ContactSection";
import NewsletterSection from "./component/newsletterSection/NewsletterSection";
import FooterSection from "./component/footerSection/FooterSection";

function App() {
  return (
    <main className="app">
      <Navbar />
      <HeroSection />
      <NumbersSection />
      <MissionsSection />
      <PourquoiNousSection />
      <NosCompetencesSection />
      <FondateurSection />
      <LaFabrikSection />
      <BlogsSection />
      <PartnersSection />
      <ContactSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}

export default App;
