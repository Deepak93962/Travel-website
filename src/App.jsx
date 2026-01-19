import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Destinations from "./pages/Destinations";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination/:slug" element={<Destination />} />
        <Route path="/About" element={<About />} />
      </Routes>

      
    </BrowserRouter>
  );
}
