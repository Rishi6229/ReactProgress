import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState();

  //useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random(i) * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);



  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0 , Password.length);
    window.navigator.clipboard.writeText(Password);
  },[Password])






  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,setPassword])




  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-900">
        <h1 className="text-white text-center mb-4">Password Generator</h1>
        <div className='className="flex-shadow rounded-lg overflow-hidden mb-4"'>
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          {/* Copy button configuration. */}
          <button className="outilne-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipBoard}>
            Copy
          </button>
        </div>
        {/* Forms optimization */}
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
