import featuredPlaces from "../data/featuredPlaces";

export default function FeaturedPlaces() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-orange-500 font-semibold tracking-widest uppercase">
          Explore Top Destinations
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-black mt-3">
          Our Featured Places
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Discover the world’s most loved destinations curated for unforgettable
          travel experiences.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12 mt-16">
          {featuredPlaces.map((place) => (
            <div key={place.name} className="flex flex-col items-center">
              {/* Circle */}
              <div
                className="
                w-28 h-28
                rounded-full
                border-2 border-orange-400
                flex items-center justify-center
                hover:bg-orange-500
                transition group
              "
              >
                {place.image ? (
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-14 h-14 object-contain group-hover:invert"
                  />
                ) : (
                  <span className="text-3xl font-bold text-orange-500 group-hover:text-white">
                    {place.name[0]}
                  </span>
                )}
              </div>

              {/* Name */}
              <p className="mt-4 font-semibold text-black uppercase tracking-wide">
                {place.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
