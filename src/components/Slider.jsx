import personImg from "/assets/person-slider.png";
import playBtn from "/assets/play-btn.png";
import leftArrow from "/assets/left-arrow.png";
import rightArrow from "/assets/right-arrow.png";
import { useState } from "react";

const Slider = () => {
  const slides = [1, 2, 3, 4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section>
      {/*  */}
      <div className="w-340 h-180 pl-22.5 pr-16.5 relative bg-purple-300 m-auto rounded-[20px] flex mt-27">
        <div className="self-center w-138">
          <p className="font-medium text-[26px] leading-[40.04px]">
            Musicians like Jason use Setapp to push the limits of their
            creativity, dancing through tasks for more time to play.
          </p>
          <span className="mt-10 text-[16px] inline-block">
            Jason Staczek
          </span>
          <button className="block mt-33 bg-white-100 rounded-full w-18.5 h-18.5">
            <img
              src={playBtn}
              alt="a white circle with right arrow in it"
              className="m-auto"
            />
          </button>
        </div>

        <div className="flex items-end justify-between">
          <img
            src={personImg}
            alt="a man wearing a brown shirt"
            width={670}
            height={690}
          />
        </div>

        <div className="flex items-center gap-11.5 absolute top-[64.8px] right-22.5">
          <img
            src={leftArrow}
            alt="a gray left arrow"
            onClick={prevSlide}
            className="cursor-pointer"
          />
          <img
            src={rightArrow}
            alt="a gray right arrow"
            onClick={nextSlide}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="flex gap-6.25 justify-center py-6.25">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-black-700" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Slider;
