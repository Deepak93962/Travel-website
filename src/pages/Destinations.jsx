 
import destinations from "../data/destinations";
import { Link } from "react-router-dom";
import images from "../assets/images";

export default function Destinations() {
  return (
    <section className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
         
        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Discover Recent <br /> Popular Destinations
          </h1>

          <div>
            <p className="text-gray-600 text-lg">
              Explore the most loved travel destinations with famous places,
              local food, and easy transport options curated just for you.
            </p>

            <Link
              to="/"
              className="inline-flex items-center mt-6 font-semibold text-orange-500 hover:underline"
            >
              Request Custom Trip →
            </Link>
          </div>
        </div>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((city) => (
            <Link
              key={city.slug}
              to={`/destination/${city.slug}`}
              className="group bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={images[city.famous_places[0].image]}
                  alt={city.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold uppercase">{city.name}</h3>

                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {city.description}
                </p>

                <div className="mt-4 text-orange-500 font-semibold">
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
