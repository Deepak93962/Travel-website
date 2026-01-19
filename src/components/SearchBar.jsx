import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar() {
  const [place, setPlace] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!place.trim()) return;

    const slug = place.toLowerCase().trim().replace(/\s+/g, "-");
    navigate(`/destination/${slug}`);
  };

  return (
    <div className="flex bg-white rounded overflow-hidden">
      <input
        value={place}
        className="p-3 text-black outline-none w-72"
        placeholder="Search destination..."
        onChange={(e) => setPlace(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      <button className="bg-orange-500 px-6 text-white" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
