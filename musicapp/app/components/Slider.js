import React, { useRef } from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import search from "../assets/search.png";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import pause from "../assets/pause.svg";
import header from "../assets/header.svg";

let count = 0;

const Slider = ({ data }) => {
  const imageUrls = data.imageUrls;
  const id = data.id;
  const songUrl = data.songUrl;
  let slideInterval;

  const slideRef = useRef();
  const songRef = useRef();
  const [index, setIndex] = useState(0);
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };
  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("animationend", removeAnimation);
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const handleOnNextClick = () => {
    count = (count + 1) % imageUrls.length;
    setIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPreviousClick = () => {
    const length = imageUrls.length;
    count = (index + length - 1) % length;
    setIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  return (
    <div className="w-[60vw] lg:w-[30vw] h-[85vh] bg-[#252525] m-auto lg:rounded-[3rem] rounded-[1rem] mr-2">
      <div className="absolute hidden">
        <audio controls loop autoPlay ref={songRef} src={songUrl} />
      </div>
      <div className="w-full top-0 pt-5 overflow-hidden text-nowrap h-full text-white text-[2.5rem] font-roboto font-extrabold flex flex-col justify-start items-center">
        <p className="pl-2 w-5/6 mr-2">{id}</p>
        <div className="absolute pr-[3rem] right-3 w-[10rem] h-[2.5rem] bg-gradient-to-l from-[#252525] to-transparent rounded-full"></div>
        <div className="absolute pr-[3rem] right-3 w-[10rem] h-[2.5rem] bg-gradient-to-l from-[#252525] to-transparent"></div>
        <div className="absolute pr-[3rem] right-0">
          <a href="./">
            <Image height={40} width={40} src={search} alt="search" />
          </a>
        </div>

        <div className="mt-5 relative w-4/5 h-3/4 bg-[#252525]" ref={slideRef}>
          <Image
            fill
            style={{ objectFit: "cover", borderRadius: "2rem" }}
            src={imageUrls[index]}
          />
        </div>
        <div className="px-[3rem] py-3 w-full flex flex-row items-center justify-between">
          <button
            onClick={handleOnPreviousClick}
            className="relative h-3/5 w-2/5"
          >
            <Image height={800} width={400} src={left} />
          </button>

          <button onClick={handleOnNextClick} className="relative h-3/5 w-2/5">
            <Image width={800} height={500} src={right} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
