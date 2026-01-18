import aboutHero from "../assets/about-hero.webp"; // add a wide banner image
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
export default function About() {
  return (
    <div className="pt-16">
      {/* ===== HERO SECTION ===== */}
      <section
        className="h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="uppercase tracking-widest text-sm mb-2">
              About TravelExplorer
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Trusted Travel Mates
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
              Discover destinations, cultures, and unforgettable experiences
              with a team that truly loves travel.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ABOUT CONTENT ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="uppercase text-sm tracking-widest text-orange-500 mb-3">
              Who We Are
            </p>

            <h2 className="text-4xl font-extrabold mb-6">
              We Are a Team of <br /> Passionate Travelers
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              TravelExplorer was created with a simple mission — to make travel
              planning easy, inspiring, and meaningful. We believe every journey
              should be filled with discovery, comfort, and unforgettable
              memories.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              From iconic landmarks to hidden local gems, we curate destinations
              that offer authentic experiences, delicious local food, and
              seamless transport options.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whether you are traveling solo, with family, or seeking adventure,
              TravelExplorer is your trusted companion.
            </p>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-lg shadow-lg h-160">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="Travel adventure"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-orange-500 text-4xl mb-4">💳</div>
            <h3 className="font-bold text-xl mb-2">Free Cancellation</h3>
            <p className="text-gray-600">
              Flexible booking options that give you peace of mind.
            </p>
          </div>

          <div>
            <div className="text-orange-500 text-4xl mb-4">📅</div>
            <h3 className="font-bold text-xl mb-2">Flexible Dates</h3>
            <p className="text-gray-600">
              Travel on your schedule with customizable itineraries.
            </p>
          </div>

          <div>
            <div className="text-orange-500 text-4xl mb-4">🧭</div>
            <h3 className="font-bold text-xl mb-2">Expert Guides</h3>
            <p className="text-gray-600">
              Handpicked local guides for authentic experiences.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    
  );
}
