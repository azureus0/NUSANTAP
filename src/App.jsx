import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./index.css";
import SignUp from "./pages/Login/Components/SignUp";
import Donate from "./pages/Donate/Assets/Components/Donate";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/SignUp" element={<SignUp />} /> 
          <Route path="/Donate" element={<Donate />} /> 
          <Route path="/contact" element={<Contact />} /> 
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
