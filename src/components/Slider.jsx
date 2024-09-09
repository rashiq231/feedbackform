export default function Slider({ sliderName }) {
  return (
    <>
      <div>
        <label htmlFor={sliderName}>
          {sliderName}
          <input type="range" min={1} max={100} id={sliderName} />
        </label>
        <p>Additional Message</p>
        <textarea name="" id=""></textarea>
      </div>
    </>
  );
}
