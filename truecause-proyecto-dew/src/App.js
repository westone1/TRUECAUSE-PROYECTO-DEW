import './App.css';
import './css/setter.css'

import HeaderMainContainer from './Header.js';
import Banner from './Banner.js';
import Brands from './Brands.js';
import Mision from './Mision.js';
import Vision from './Vision.js';
import Infocards from './InfoCards.js';
import Footer from './Footer.js';



function App() {
  return (
    <>
      <header id="header">
        <HeaderMainContainer/>
      </header>
      <main>
        <Banner/>
        <section id='brands'>
          <Brands/>
        </section>
        <section id='mision'>
          <Mision/>
        </section>
        <section id='vision'>
          <Vision/>
        </section>
        <section id='infoCard'>
            <Infocards/>
        </section>
      </main>
      <footer id='footer'>
          <Footer/>
      </footer>
    </>
  )
}



export default App;
