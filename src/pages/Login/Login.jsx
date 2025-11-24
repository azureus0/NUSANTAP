import React from 'react';
import Header from '../../shared/components/Header';
import NavBar from '../../shared/components/NavBar';
import Footer from '../../shared/components/Footer';
import SignIn from './Components/SignIn';


function Login() {
    return (
        <div className="min-w-screen">
            <Header />
            <SignIn/>
            <Footer />
        </div>
    );
}

export default Login;
