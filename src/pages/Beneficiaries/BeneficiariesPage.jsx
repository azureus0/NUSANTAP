import React from 'react';
import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import FooterVar2 from '../../shared/components/FooterVar2';
import Hero from './components/Hero';
import WhoApply from './components/WhoApply'; 
import Testimoni from './components/Testimoni'; 
import { Link } from 'react-router-dom';

function BeneficiariesPage() {
    return (
        <div className="w-full">
            <Header />
            <Hero />
            <Testimoni />
            <WhoApply />

            {/* Desktop: Footer */}
            <div className="hidden md:block">
                <Footer />
            </div>

            {/* Mobile: FooterVar2 */}
            <div className="block md:hidden">
                <FooterVar2 />
            </div>
            
        </div>
    );
}

export default BeneficiariesPage;
