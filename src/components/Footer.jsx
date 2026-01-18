export default function Footer() {
  return (
    <footer className="bg-[#e6ead1] text-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              ✈️ TravelExplorer
            </h2>

            <p className="mt-4 text-sm">
              Amphitheatre Parkway, Mountain View, California
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center gap-2">📞 +123 456 789</p>
              <p className="flex items-center gap-2">✉️ hello@nex.tour</p>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-4 text-lg">
              <span className="cursor-pointer">🌐</span>
              <span className="cursor-pointer">🐦</span>
              <span className="cursor-pointer">▶️</span>
            </div>
          </div>

          {/* MENU */}
          <div>
            <h3 className="font-semibold uppercase mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">Guide</li>
              <li className="hover:underline cursor-pointer">Destinations</li>
              <li className="hover:underline cursor-pointer">Travel Blog</li>
              <li className="hover:underline cursor-pointer">Testimonials</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold uppercase mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Accommodation</li>
              <li className="hover:underline cursor-pointer">Flights</li>
              <li className="hover:underline cursor-pointer">Our Team</li>
            </ul>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold uppercase mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">Booking</li>
              <li className="hover:underline cursor-pointer">Contact</li>
              <li className="hover:underline cursor-pointer">Help Center</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-400/40 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm">
          <p>
            Powered by{" "}
            <span className="text-lime-600 font-medium">SocioLib</span>.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:underline cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:underline cursor-pointer">Our Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
