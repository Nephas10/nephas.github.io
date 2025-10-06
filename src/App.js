import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import Footer from './component/footer/Footer';

function App() {
  return (
   <div className="App">
    <Header />
    <section id="home">
      <Hero />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <Footer/>
   </div>
  );
}

export default App;
