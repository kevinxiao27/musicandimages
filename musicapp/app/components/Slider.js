/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { useState, useEffect } from "react";

let count = 0;

const Slider = ({ imageUrls }) => {
  const slideRef = useRef();
  const [index, setIndex] = useState(0);
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("animationend", removeAnimation);
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % imageUrls.length;
    setIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPreviousClick = () => {
    count = (count - 1) % imageUrls.length;
    setIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  return (
    <div ref={slideRef} className="w-[60vw] m-auto t-[20rem]">
      <div className="w-full relative select-none">
        <img
          className="object-contain w-[100vw] h-[90vh]"
          src={imageUrls[index]}
          alt=""
        />
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-start">
          <button
            className="font-roboto p-3 border-white border-solid border-2 text-white"
            onClick={handleOnPreviousClick}
          >
            Previous
          </button>
          <button
            className="font-roboto p-3 border-white border-solid border-2 text-white"
            onClick={handleOnNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
