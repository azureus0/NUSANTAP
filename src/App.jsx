import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import BeneficiariesPage from "./pages/Beneficiaries/BeneficiariesPage";
import ArticlesPage from "./pages/Articles/ArticlesPage"
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/Components/SignUp";
import Donate from "./pages/Donate/Assets/Components/Donate";
import Contact from "./pages/Contact/Contact";
import AdminPage from "./pages/Admin/AdminPage";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<HomePage />} /> {/*ada versi mobile*/}
          <Route path="/about" element={<AboutPage />} /> {/*ada versi mobile*/}
          <Route path="/beneficiaries" element={<BeneficiariesPage />} /> {/*ada versi mobile*/}
          <Route path="/news" element={<ArticlesPage />} /> {/*ada versi mobile*/}
          <Route path="/login" element={<Login />} /> 
          <Route path="/SignUp" element={<SignUp />} /> 
          <Route path="/Donate" element={<Donate />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminPage />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
