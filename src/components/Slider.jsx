import personImg from "/assets/person-slider.png";
import playBtn from "/assets/play-btn.png";
import leftArrow from "/assets/left-arrow.png";
import rightArrow from "/assets/right-arrow.png";
import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState([
    "img1",
    "img2",
    "img3",
    "img4",
  ]);
  return (
    <section>
      <div className="mt-[108.16px] w-[1355px] h-[720px] pl-[91px] pr-[66px] relative bg-purple-300 m-auto rounded-[20px] flex">
        <div className="self-center w-[556px] ">
          <p className="font-medium text-[26px] leading-[40.04px]">
            Musicians like Jason use Setapp to push the limits of their
            creativity, dancing through tasks for more time to play.
          </p>
          <span className="mt-[41px] text-[16px] inline-block">
            Jason Staczek
          </span>
          <button className="block mt-[131.88px] bg-white-100 rounded-full w-[74px] h-[74px]">
            <img src={playBtn} alt="a white circle with right arrow in it" className="m-auto" />
          </button>
        </div>

        {/* <div className="relative"></div> */}
        <div className="flex items-end justify-between">
          <img
            src={personImg}
            alt="a man wearing a brown shirt"
            width={670}
            height={690}
          />
        </div>

        <div className="flex items-center gap-[46px] absolute top-[64.8px] right-[91px]">
          <img src={leftArrow} alt="a gray left arrow" />
          <img src={rightArrow} alt="a gray right arrow" />
        </div>
      </div>

      <div className="flex gap-[25px] justify-center my-[25px]">
        {currentSlide.map((slide) => (
          <span className="w-[12px] h-[12px] bg-white-100 rounded-full"></span>
        ))}
      </div>
    </section>
  );
};

export default Slider;
