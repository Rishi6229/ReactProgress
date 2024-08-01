import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Button({onClick , children}){
  return(
    <button onClick={onClick}>
      {children}
    </button>
  )
}

function PlayButton({movieName}){
  function handlePlayClick(){
    alert(`Playing ${movieName}!`)
  }
  return(
    <Button onClick={handlePlayClick}>Play "{movieName}"</Button>
  )

}


function UploadButton(){
  return(
    <Button onClick={()=>alert('Uploading!')}>
      Upload Image
    </Button>
  )
}


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UploadButton/>
      <PlayButton movieName="Shawshank Redemption!"/>
    </>
  );
}

export default App;
