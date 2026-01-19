import { useParams } from "react-router-dom";
import destinations from "../data/destinations";
import images from "../assets/images";

export default function Destination() {
  const { slug } = useParams();
  const data = destinations.find((city) => city.slug === slug);

  if (!data) {
    return (
      <div className="pt-32 text-center text-xl font-semibold">
        Destination Not Found
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* ================= HERO ================= */}
      <div className="relative h-[520px] w-full overflow-hidden">
        <img
          src={
            typeof data.famous_places[0].image === "string" &&
            data.famous_places[0].image.startsWith("http")
              ? data.famous_places[0].image
              : images[data.famous_places[0].image]
          }
          alt={data.name}
          className="h-full w-full object-cover scale-105"
        />

        {/* DARK GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* TEXT CONTENT */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              {data.name}
            </h1>

            <p className="mt-5 max-w-2xl text-lg md:text-xl text-gray-200 leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-14 space-y-16">
        {/* ===== FAMOUS PLACES ===== */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Famous Places</h2>

          <div className="space-y-8">
            {data.famous_places.map((place, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <img
                  src={
                    typeof place.image === "string" &&
                    place.image.startsWith("http")
                      ? place.image
                      : images[place.image]
                  }
                  alt={place.name}
                  className="w-full md:w-64 h-40 object-cover rounded-lg"
                />

                <div>
                  <h3 className="text-xl font-semibold">{place.name}</h3>
                  <p className="text-gray-600 mt-1">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== HOW TO REACH ===== */}
        <section>
          <h2 className="text-3xl font-bold mb-6">How to Reach</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-5">
              <h4 className="font-semibold text-lg">🚆 Train</h4>
              <p className="text-gray-600 mt-1">{data.transport.train.name}</p>
            </div>

            <div className="border rounded-lg p-5">
              <h4 className="font-semibold text-lg">🚌 Bus</h4>
              <p className="text-gray-600 mt-1">{data.transport.bus.name}</p>
            </div>

            <div className="border rounded-lg p-5">
              <h4 className="font-semibold text-lg">✈️ Flight</h4>
              <p className="text-gray-600 mt-1">{data.transport.flight.name}</p>
            </div>
          </div>
        </section>

        {/* ===== LOCAL FOOD ===== */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Local Food to Try</h2>

          <div className="flex flex-wrap gap-3">
            {data.foods.map((food, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-orange-100 text-green-600 rounded-full text-sm font-medium"
              >
                {food.name}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
