import "./home.css";

// global components
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

// components
import Services from "./components/Services";
import Information from "./components/Information";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="over-flow-hiden">
      <Navbar />
      <Header />
      <main>
        <Services />
        <Information />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
