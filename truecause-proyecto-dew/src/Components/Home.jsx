import React from "react";
import Banner from '../Components/Banner.js';   
import Brands from '../Components/Brands.js';
import Mision from '../Components/Mision.js';
import Vision from '../Components/Vision.js';
import Infocards from '../Components/InfoCards.js';
import Footer from '../Components/Footer.js';
import '../css/header/header.css'
import '../css/setter.css'

function Home(){
    return (
        <div className="home">
            <main>
                <Banner />
                <section id='brands'>
                    <Brands />
                </section>
                <section id='mision'>
                    <Mision />
                </section>
                <section id='vision'>
                    <Vision />
                </section>
                <section id='infoCard'>
                    <Infocards />
                </section>
            </main>
            <footer id='footer'>
                <Footer />
            </footer>
        </div>


    )
}

export default Home;