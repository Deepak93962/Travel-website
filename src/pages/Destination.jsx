import { useParams } from "react-router-dom";
import destinations from "../data/destinations";

export default function Destination() {
  const { name } = useParams();
  const data = destinations.find((d) => d.slug === name);

  if (!data) return <h1>Destination Not Found</h1>;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">{data.name}</h1>
      <p className="mt-2">{data.description}</p>

      <h2 className="mt-6 text-2xl">How to Reach</h2>
      <ul>
        <li>🚆 Train: {data.transport.train}</li>
        <li>🚌 Bus: {data.transport.bus}</li>
        <li>✈️ Flight: {data.transport.flight}</li>
      </ul>
    </div>
  );
}
