import { forwardRef } from "react";
const Slider = forwardRef(function Slider({ sliderName }, ref) {
  return (
    <>
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
            ref={ref}
          />
        </label>
        <p>Additional Message</p>
        <textarea name="" id=""></textarea>
      </div>
    </>
  );
});

export default Slider;
