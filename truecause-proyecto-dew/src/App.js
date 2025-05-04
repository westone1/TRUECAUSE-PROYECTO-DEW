import React, { useEffect, useState } from "react";
import './css/setter.css'
import Home from './Components/Home.jsx'
import HImpacto from './Components/HImpacto.jsx'
import SolIcono from './img/sol.png'
import LunaIcono from './img/luna.png'
import logoTrueCause from './img/logoTrueCause-noBg.png'
import DonacionForm from './Components/DonationForm.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

        useEffect(() => {
            const root = document.documentElement;
            root.setAttribute('data-theme', modoOscuro ? 'dark' : 'light');
        }, [modoOscuro]);
    
    
        useEffect(() => {
            const temaGuardado = localStorage.getItem('tema');
            if (temaGuardado === 'dark') setModoOscuro(true);
        }, []);
    
        const cambioTema = () => {
            setModoOscuro(prev => !prev);
        }

  return (
    <Router>
        <header id="header">
        <div className="header-mainContainer">
            <img className="logo-truecause" src={logoTrueCause} alt="Logo TrueCause"/>
            <nav className="header-mainContainer__navbar">
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/hImpacto'>Historias de Impacto</Link></li>
                    <li><Link to='/contacto'>Contáctanos</Link></li>
                </ul>
            </nav>
            <img className="cambioTema" src={modoOscuro ? SolIcono : LunaIcono} onClick={cambioTema} alt="Icono cambio de tema"/>
        </div>
        </header>
        
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/hImpacto' exact element = {<HImpacto/>} />
        <Route path='/contacto' exact element={<DonacionForm/>} />
      </Routes>
    </Router>

  )
}



export default App;
