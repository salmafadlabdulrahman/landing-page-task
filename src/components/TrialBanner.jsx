import logo from "/assets/trial-logo.png";

const TrialBanner = () => {
  return (
    <section className="max-w-332.5 mx-auto bg-white-300 rounded-2xl px-9">
      <div className="py-24 pl-10">
        <img src={logo} alt="Setapp logo" />

        <p className="mt-6 text-[46px] font-semibold leading-[1.3] tracking-wide text-black-600">
          Superpowers starting $9.99/month.
          <br />
          Free for 7 days.
        </p>

        <div className="mt-15 flex items-center gap-6">
          <button className="btn-primary">Get started now</button>
          <button className="btn-outline text-black-600">
            More about Setapp
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrialBanner;
