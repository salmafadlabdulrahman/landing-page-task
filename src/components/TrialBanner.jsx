import logo from "/assets/trial-logo.png";

const TrialBanner = () => {
  return (
    <div className="mt-[88.48px] text-black-600 w-[1330px] m-auto bg-white-300 rounded-[20px] px-[35px]">
      <div className="pt-[124px] pl-[40px] pb-[92px]">
        <img src={logo} alt="a yellow square" />
        <p className="text-[46px] mt-[21px] font-semibold leading-[59.8px] tracking-[1.3px]">
          Superpowers starting $9.99/month. <br /> Free for 7 days.
        </p>

        <div className="mt-[60px] flex items-center gap-[24.5px]">
          <button className="bg-black-600 rounded-[6px] text-white pl-[31px] pr-[31.41px] py-[13px]">
            Get started now
          </button>
          <button className=" text-black border border-black-600 pl-[31px] rounded-[6px] tracking-[1px] pr-[31.57px] py-[13px]">
            More about Setapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrialBanner;
