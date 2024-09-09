import { useRef } from "react";
export default function Slider({ sliderName }) {
  const sliderRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    // Process the form data here
    console.log("Name:", sliderRef.current.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={sliderName}>
            {sliderName}
            <input
              type="range"
              min={1}
              max={100}
              id={sliderName}
              name={sliderName}
              onChange={(e) => e.target.value}
              ref={sliderRef}
            />
          </label>
          <p>Additional Message</p>
          <textarea name="" id=""></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
