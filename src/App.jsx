import Hero from "./components/Hero";
import HighLights from "./components/HighLights";
import Model from "./components/model/Model";
import Navbar from "./components/Navbar";
import Features from './components/item/Features'
import Game from "./components/game/Game";
import Footer from "./components/Footer";
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HighLights />
      <Model />
      <Features/>
      <Game/>
      <Footer/>
    </main>
  );
}

export default App;
