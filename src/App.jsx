import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import "./index.css";
import BeneficiariesPage from "./pages/Beneficiaries/BeneficiariesPage";
import ArticlesPage from "./pages/Articles/ArticlesPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/beneficiaries" element={<BeneficiariesPage />} />
          <Route path="/pages" element={<ArticlesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
