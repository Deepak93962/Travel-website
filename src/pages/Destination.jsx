import { useParams } from "react-router-dom";
import destinations from "../data/destinations";
import images from "../assets/images";

export default function Destination() {
  const { name } = useParams();
  const data = destinations.find((d) => d.slug === name);

  if (!data) {
    return <div className="p-10 text-center">Destination Not Found</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold">{data.name}</h1>
      <p className="mt-2 text-gray-600">{data.description}</p>

      {/* HOW TO REACH */}
      <h2 className="mt-10 text-2xl font-semibold">How to Reach</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {Object.entries(data.transport).map(([type, item]) => (
          <div key={type} className="bg-white rounded shadow">
            <img
              src={images[item.image]}
              alt={item.name}
              className="h-36 w-full object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="font-bold capitalize">{type}</h3>
              <p className="text-sm">{item.name}</p>
              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAMOUS PLACES */}
      <h2 className="mt-10 text-2xl font-semibold">Famous Places</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {data.famous_places.map((place, index) => (
          <div key={index} className="bg-white rounded shadow">
            <img
              src={images[place.image]}
              alt={place.name}
              className="h-40 w-full object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="font-bold">{place.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{place.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FOOD */}
      <h2 className="mt-10 text-2xl font-semibold">Famous Food</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {data.foods.map((food, index) => (
          <div key={index} className="bg-white rounded shadow">
            <img
              src={images[food.image]}
              alt={food.name}
              className="h-36 w-full object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="font-bold">{food.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{food.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
