export default function WhyChooseUs() {
  const features = [
    { title: "Easy To Use", icon: "🧭" },
    { title: "Secure Booking", icon: "🛡️" },
    { title: "Best Packages", icon: "🤝" },
    { title: "Daily Deals", icon: "💰" },
    { title: "24/7 Support", icon: "📞" },
    { title: "Fast Payments", icon: "⚡" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-orange-500 font-semibold tracking-widest uppercase">
          Travel Smarter
        </p>

        <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900">
          Why Choose Us?
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
          Plan, book, and explore your favorite destinations with confidence —
          anytime, anywhere.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-gray-800 text-lg">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
