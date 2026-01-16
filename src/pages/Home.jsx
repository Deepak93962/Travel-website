import SearchBar from "../components/SearchBar";
import heroImg from "../assets/hero.png";

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark overlay */}
      <div className="h-full bg-black/50 flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Find Your Perfect Destination
        </h1>

        <p className="mb-6 text-center text-lg">
          Discover places, food & travel routes
        </p>

        <SearchBar />
      </div>
    </div>
  );
}
