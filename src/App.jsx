import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Modal from "./components/modal/Modal";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="about" />
      </section>
      <section>
        <About />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <span id="Portfolio">
          <Services />
        </span>
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      <Footer />
      <Modal />
    </div>
  );
};

export default App;
