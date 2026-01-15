import logo from "/assets/trial-logo.png";

const TrialBanner = () => {
  return (
    <div className="text-black-600 w-332.5 m-auto bg-white-300 rounded-[20px] px-8.75">
      <div className="pt-31 pl-10 pb-23">
        <img src={logo} alt="a yellow square" />
        <p className="text-[46px] mt-5.25 font-semibold leading-[59.8px] tracking-[1.3px]">
          Superpowers starting $9.99/month. <br /> Free for 7 days.
        </p>

        <div className="mt-15 flex items-center gap-[24.5px]">
          <button className="btn-primary">Get started now</button>
          <button className="btn-outline ">More about Setapp</button>
        </div>
      </div>
    </div>
  );
};

export default TrialBanner;
