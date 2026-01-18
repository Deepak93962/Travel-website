import { Link } from "react-router-dom";

const categories = [
  {
    title: "Adventure",
    count: "250 Destinations",
    image:
      "https://plus.unsplash.com/premium_photo-1683120768716-d4242ac2ea4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Family",
    count: "125 Destinations",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  },
  {
    title: "Road Trip",
    count: "75 Destinations",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  },
  {
    title: "Art & Culture",
    count: "45 Destinations",
    image:
      "https://plus.unsplash.com/premium_photo-1664301183877-85b1070c12b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtZWx8ZW58MHx8MHx8fDA%3D",
  },
];

export default function Categories() {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== HEADER ===== */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Browse Destinations <br /> By Category
          </h2>

          <div>
            <p className="text-gray-700 text-lg">
              Explore trips based on your travel style — adventure, family, road
              trips, or culture-focused journeys.
            </p>

            <Link
              to="/destinations"
              className="inline-flex items-center mt-6 font-semibold text-black hover:underline"
            >
              View All →
            </Link>
          </div>
        </div>

        {/* ===== CATEGORY GRID ===== */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative group h-[280px] md:h-[320px] overflow-hidden rounded-lg"
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-extrabold uppercase">
                  {cat.title}
                </h3>
                <p className="mt-2">{cat.count}</p>

                <Link
                  to="/destinations"
                  className="inline-flex items-center mt-3 font-semibold"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
