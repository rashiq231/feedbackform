import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Slider from "./components/Slider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Slider sliderName="Quality of Product" />
      <Slider sliderName="Quality of Packageing" />
    </>
  );
}

export default App;
