import React from 'react';
import Header from '../../shared/components/Header';
import NavBar from '../../shared/components/NavBar';
import Footer from '../../shared/components/Footer';
import { Link } from 'react-router-dom';
import Hero from './components/Hero';
import Testimoni from '../Home/components/Testimoni';
import Info from './components/Info';
import Contact from './components/Contact';
import VideSection from './components/VideoSection';
import News from './components/News';

function AboutPage() {
    return (
        <div className="w-full">
            <Header />

            <Hero />

            {/* Mobile: News */}
            <div className="block lg:hidden">
                <News />
            </div>

            {/* Desktop: VideoSection */}
            <div className="hidden lg:block">
                <VideSection />
            </div>

            {/* Desktop: Info */}
            <div className="hidden lg:block">
                <Info />
            </div>

            {/* Desktop: Testimoni */}
            <div className="hidden lg:block">
                <Testimoni />
            </div>

            {/* Mobile: Contact */}
            <div className="block lg:hidden">
                <Contact />
            </div>

            {/* Mobile: VideoSection */}
            <div className="block lg:hidden">
                <VideSection />
            </div>

            {/* Desktop: Footer */}
            <Footer />
        </div>
    );
}


export default AboutPage;
