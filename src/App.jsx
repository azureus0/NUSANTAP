import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
import Home from "./pages/Home/Home";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
