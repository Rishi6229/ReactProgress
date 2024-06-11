import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import Card from "./components/card";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-400 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="Rishi Jha"/>
      <Card username="Mayank Loser"/>
    </>
  );
}
