import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Search from "../components/Search/Search";
import Services from "../components/Services/Services";
import Network from "../components/Network/Network";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <main className="main-wrapper">
        <Hero />
        <Search />
        <Services />
        <Network />
      </main>
    </>
  );
};

export default LandingPage;

