import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import Contact from './component/Contact/Contact';

function App() {
  return (
   <div className="App">
    <Header />
    <section id="home">
      <Hero />
    </section>
    <section id="about">
    </section>
    <section id="contact">
      <Contact />
    </section>
   </div>
  );
}

export default App;
