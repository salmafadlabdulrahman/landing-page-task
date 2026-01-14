import facebookIcon from "/assets/facebook-icon.png";
import faceCircleIcon from "/assets/facebook-circle-icon.png";
import twitterIcon from "/assets/twitter-icon.png";
import twitterCircleIcon from "/assets/twitter-circle-icon.png";
import instagramIcon from "/assets/insta-icon.png";
import instaCircleIcon from "/assets/insta-circle-icon.png";
import youtubeIcon from "/assets/youtube-icon.png";
import TestimonialCard from "./TestimonialCard";
import leftArrow from "/assets/left-arrow-black.png";
import rightArrow from "/assets/right-button-black.png";
import { useState } from "react";

const Testmonial_Cards = [
  {
    text: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    writer: "Arash Pourhabibi",
    writerAccount: "@ArashPourhabibi",
    resourceIcon: twitterIcon,
    bgColor: "#71719A",
  },

  {
    text: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher..",
    writer: "Mauricio Sanchez",
    writerAccount: "@m741s",
    resourceIcon: instagramIcon,
    bgColor: "#D9AE89",
  },

  {
    text: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    writer: "Meredith Sweet",
    writerAccount: "@meredith.sweet.silberstein",
    resourceIcon: facebookIcon,
    bgColor: "#765070",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState([
    "img1",
    "img2",
    "img3",
    "img4",
    "img5",
    "img6",
  ]);
  return (
    <section className="w-[1260px] m-auto pt-[120px] text-black-600">
      <div className="mt-[100px] flex justify-between items-center ">
        <h3 className="text-[36px] font-semibold tracking-[1.3px] text-[18px]">
          Setapp in your words.
        </h3>

        <div className="flex items-center justify-end gap-[25px]">
          <p className="text-[18px] w-[300px] leading-[32.04px]">
            What you say about how Setapp powers you up.
          </p>

          <div className="flex items-center justify-end w-[300px] gap-[10px]">
            <img
              src={faceCircleIcon}
              alt="a blue circle with the letter f in it"
            />
            <img
              src={twitterCircleIcon}
              alt="a blue circle with a bird in it"
            />
            <img
              src={instaCircleIcon}
              alt="a pink circle with a camera in it"
            />
            <img src={youtubeIcon} alt="a red circle with the play btn in it" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[46px] justify-end mt-[25px]">
        <img src={leftArrow} alt="a gray left arrow" />
        <img src={rightArrow} alt="a gray right arrow" />
      </div>

      <div className="mt-[20px] flex items-center gap-[27px]">
        {Testmonial_Cards.map((card) => (
          <TestimonialCard {...card} />
        ))}
      </div>

      <div className="flex gap-[25px] justify-center mb-[25px] mt-[32.99px]">
        {currentSlide.map((slide) => (
          <span className="w-[12px] h-[12px] bg-black-500 rounded-full"></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
