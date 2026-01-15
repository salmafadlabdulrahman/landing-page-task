const TestimonialCard = ({
  text,
  writer,
  writerAccount,
  resourceIcon,
  bgColor,
}) => {
  return (
    <div
      className={`w-[380px] h-[422.44px] bg-white-300 text-white-100 rounded-[15px]`}
    >
      <div
        style={{ backgroundColor: bgColor }}
        className="w-[366px] h-[299px] m-[7px] rounded-[15px] pl-[22px] pt-[38.5px]"
      >
        <p className="text-[26px] w-[322px]">{text}</p>
      </div>

      <div className="text-black-600 mt-[38.5px]">
        <div className="flex justify-between w-[366px] m-auto px-[22px]  ">
          <div className="">
            <p className="text-[18px] font-semibold ">{writer}</p>
            <p className="text-[14px] font-semibold text-gray-400">
              {writerAccount}
            </p>
          </div>
          <img src={resourceIcon} alt="an icon" className="self-end" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;