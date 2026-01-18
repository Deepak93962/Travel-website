// import { useParams } from "react-router-dom";
// import destinations from "../data/destinations";
// import images from "../assets/images";

// export default function Destination() {
//   const { name } = useParams();
//   const data = destinations.find((d) => d.slug === name);

//   if (!data) {
//     return <div className="p-10 text-center">Destination Not Found</div>;
//   }

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-4xl font-bold">{data.name}</h1>
//       <p className="mt-2 text-gray-600">{data.description}</p>

//       {/* HOW TO REACH */}
//       <h2 className="mt-10 text-2xl font-semibold">How to Reach</h2>
//       <div className="grid md:grid-cols-3 gap-6 mt-4">
//         {Object.entries(data.transport).map(([type, item]) => (
//           <div key={type} className="bg-white rounded shadow">
//             <img
//               src={images[item.image]}
//               alt={item.name}
//               className="h-36 w-full object-cover rounded-t"
//             />
//             <div className="p-4">
//               <h3 className="font-bold capitalize">{type}</h3>
//               <p className="text-sm">{item.name}</p>
//               <p className="text-xs text-gray-500 mt-1">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* FAMOUS PLACES */}
//       <h2 className="mt-10 text-2xl font-semibold">Famous Places</h2>
//       <div className="grid md:grid-cols-3 gap-6 mt-4">
//         {data.famous_places.map((place, index) => (
//           <div key={index} className="bg-white rounded shadow">
//             <img
//               src={images[place.image]}
//               alt={place.name}
//               className="h-40 w-full object-cover rounded-t"
//             />
//             <div className="p-4">
//               <h3 className="font-bold">{place.name}</h3>
//               <p className="text-sm text-gray-600 mt-1">{place.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* FOOD */}
//       <h2 className="mt-10 text-2xl font-semibold">Famous Food</h2>
//       <div className="grid md:grid-cols-3 gap-6 mt-4">
//         {data.foods.map((food, index) => (
//           <div key={index} className="bg-white rounded shadow">
//             <img
//               src={images[food.image]}
//               alt={food.name}
//               className="h-36 w-full object-cover rounded-t"
//             />
//             <div className="p-4">
//               <h3 className="font-bold">{food.name}</h3>
//               <p className="text-sm text-gray-600 mt-1">{food.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import destinations from "../data/destinations";
import { Link } from "react-router-dom";
import images from "../assets/images";

export default function Destinations() {
  return (
    <section className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== HEADER (SS2 STYLE) ===== */}
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

        {/* ===== DESTINATION CARDS (SS1 STYLE) ===== */}
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
