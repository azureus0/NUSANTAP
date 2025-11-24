import React from 'react';
import Header from '../../shared/components/Header';
import NavBar from '../../shared/components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Berita from './components/Berita';
import Footer from '../../shared/components/Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="min-w-screen">
            <Header />
            <NavBar />
            <Hero />
            <About />
            <Services />
            <Berita />
            <Footer />
        </div>
    );
}

export default Home;
