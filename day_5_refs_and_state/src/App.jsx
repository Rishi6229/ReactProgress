import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) string += "0123456789";
    if (characterAllowed) string += "@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  return (
    <div>
    <div
      className="w-full flex max-w-md mx-auto shadow-md rounded-lg px-4 my-8
       text-orange-500 bg-gray-700 justify-center">
      tEST
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          clasName="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
      </div>
      <button
        className="outline-none bg-blue-700 text-white px-3
      py-0.5 shrink-0"
      >
        Copy
      </button>
    </div>

      <div></div>
    </div>
  );
}

export default App;
