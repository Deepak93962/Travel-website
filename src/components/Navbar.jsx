import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500">
          TravelExplorer
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/destination/agra" className="hover:text-orange-500">
              Destinations
            </Link>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-500">
              About
            </a>
          </li>
        </ul>

        {/* CTA */}
        <button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          Explore
        </button>
      </div>
    </nav>
  );
}
