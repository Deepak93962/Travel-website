import SearchBar from "../components/SearchBar";
import heroImg from "../assets/hero.png";
import Categories from "../components/Categories";
import Destinations from "./Destinations";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <section
      className="h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl text-white">
            <span className="uppercase tracking-widest text-sm text-orange-400">
              Let’s Go
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
              Explore Your <br /> Favorite Destination
            </h1>

            <p className="mt-5 text-gray-200 text-lg">
              Discover places, food & travel routes across India with ease.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded text-white font-semibold">
                Explore Now
              </button>

              <button className="border border-white px-6 py-3 rounded text-white hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </div>

            {/* Search Bar */}
            <div className="mt-8 max-w-md">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
      <Destinations/>
      <Categories/>
      <Footer/>
    </section>

  );
}
