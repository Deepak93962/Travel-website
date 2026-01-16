export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">TravelExplorer</h2>
          <p className="mt-3 text-sm">
            Discover destinations, local food, and travel routes easily.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Home</li>
            <li>Destinations</li>
            <li>About</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="mt-3 text-sm">Email: support@travelexplorer.com</p>
          <p className="text-sm">India</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} TravelExplorer. All rights reserved.
      </div>
    </footer>
  );
}
