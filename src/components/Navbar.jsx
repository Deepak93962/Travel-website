import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link to="/" className="text-2xl font-bold text-orange-500">
            TravelExplorer
          </Link>

          {/* MENU */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <Link to="/" className="hover:text-orange-500 transition">
              Home
            </Link>

            <Link
              to="/destination/agra"
              className="hover:text-orange-500 transition"
            >
              Destinations
            </Link>

            <Link to="#about" className="hover:text-orange-500 transition">
              About
            </Link>

            <Link to="#contact" className="hover:text-orange-500 transition">
              Contact
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-gray-600">📞 +91 98765 43210</span>

            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
              Explore
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
