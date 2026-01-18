import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1"
      : "hover:text-orange-500 transition";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <NavLink to="/" className="text-2xl font-bold text-orange-500">
            TravelExplorer
          </NavLink>

          {/* MENU */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/destinations" className={linkClass}>
              Destinations
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
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
