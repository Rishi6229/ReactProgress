import { useState } from "react";

//important note about onClick function - one cannot directly pass parameters in onClickk function 
//as the onclick function we  can pass by reference only or use arrow syntax.


function App() {
  const [color, changeColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        test
      </div>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-0 py-2 rounded-3xl">
        <button onClick={()=> changeColor("red")}
          className="outline-none px-4"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>

        <button onClick={()=>changeColor("green")}
          className="outline-none px-4"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>

        <button onClick={()=>changeColor("blue")}
          className="outline-none px-4"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>

        <button onClick={()=>changeColor("pink")}
          className="outline-none px-4"
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>
      </div>
    </div>
  );
}

export default App;
