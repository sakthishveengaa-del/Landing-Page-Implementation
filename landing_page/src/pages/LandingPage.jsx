import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Search from "../components/Search/Search";
import Services from "../components/Services/Services";
import Network from "../components/Network/Network";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Impact from "../components/Impact/Impact";
import Reviews from "../components/Reviews/Reviews";
import CtaBanner from "../components/CtaBanner/CtaBanner";
import Footer from "../components/Footer/Footer";

/**
 * LandingPage component compiles all the page sections.
 * Structured with a sticky Navbar, a Main content area, and a Footer.
 */
const LandingPage = () => {
  return (
    <>
      {/* Top Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="main-wrapper">
        <Hero />
        <Search />
        <Services />
        <Network />
        <ChooseUs />
        <Impact />
        <Reviews />
        <CtaBanner />
      </main>

      {/* Page Footer */}
      <Footer />
    </>
  );
};

export default LandingPage;


