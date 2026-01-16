import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:name" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
