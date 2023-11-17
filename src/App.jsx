import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Test from "./Test";

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
      <section>About</section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Portfolio />
      </section>
      <section id="Contact">Contact</section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
