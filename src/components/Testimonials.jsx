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
  const slides = [1, 2, 3, 4, 5, 6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="w-315 m-auto pt-30 text-black-600">
      <div className="mt-25 flex-between">
        <h3 className="text-[36px] font-semibold tracking-[1.3px] text-[18px]">
          Setapp in your words.
        </h3>

        <div className="flex-end gap-6.25">
          <p className="text-[18px] w-75 leading-[32.04px]">
            What you say about how Setapp powers you up.
          </p>

          <div className="flex-end w-75 gap-2.5">
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

      <div className="flex-end gap-11.5 mt-6.25">
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

      <div className="mt-5 flex items-center gap-6.75">
        {Testmonial_Cards.map((card) => (
          <TestimonialCard {...card} />
        ))}
      </div>

      <div className="flex gap-6.25 justify-center mb-6.25 mt-[32.99px]">
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

export default Testimonials;
