import './App.css';

import Hero from "./hero/hero"
import Navbar from './navbar/navbar';
import History from './history/history';
import Climb from './climb/climb';
import Footer from "./footer/footer"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <History />
      <Climb />
      <Footer />
    </div>
  );
}

export default App;
