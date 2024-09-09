import { useState, useRef } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Slider from "./components/Slider";
import Form from "./components/Form";

function App() {
  const qualityRef = useRef();
  const packagingRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Name:", qualityRef.current.value);
  }
  return (
    <>
      <Form formSubmit={handleSubmit}>
        <Slider sliderName="Quality of Product" ref={qualityRef} />
        <Slider sliderName="Quality of Packageing" ref={packagingRef} />
      </Form>
    </>
  );
}

export default App;
