import React from 'react';
import Header from '../../shared/components/Header';
import NavBar from '../../shared/components/NavBar';
import Footer from '../../shared/components/Footer';
import { Link } from 'react-router-dom';
import Hero from './components/Hero';

function AboutPage() {
    return (
        <div className="min-w-screen">
            <Header />
            {/* <NavBar /> */}
            <Hero />
            
            <Footer />
        </div>
    );
}

export default AboutPage;
