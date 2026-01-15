import workWithPicsSticker from "/assets/pics.png";
import macPawSticker from "/assets/macpaw.png";
import vpnSticker from "/assets/vpn-ad-blocker.png";
import teamworkSticker from "/assets/teamwork.png";
import staySecureSticker from "/assets/stay-secure.png";
import heroLogoSticker from "/assets/hero-icon.png";
import fixWifiSticker from "/assets/wifi.png";
import planYourDaySticker from "/assets/plan-your-day.png";
import converterSticker from "/assets/converter.png";
import manageYourMacSticker from "/assets/manage.png";
import codeEasierSticker from "/assets/code.png";
import appleIcon from "/assets/apple.png";
import googleIcon from "/assets/google.png";

const Hero = () => {
  return (
    <section className="flex justify-center gap-[2em] mt-40">
      <div className="mt-[3em] relative">
        <div>
          <img
            src={workWithPicsSticker}
            alt="a yellow square with work pics phrase in it mt-[46px]"
            width={173}
            height={173}
          />
          <img
            src={macPawSticker}
            alt="a pink circle with a paw in it"
            width={58}
            height={58}
            className="absolute top-32.5"
          />
          <img
            src={vpnSticker}
            alt="a light blue circle with the words ad blocker"
            width={141.71}
            height={141.71}
            className="absolute left-25 top-32.5"
          />
        </div>

        <div className="relative mt-16">
          <img
            src={teamworkSticker}
            alt="a blue rectangle with the words boost team work"
            className="mt-[8em]"
            width={226.93}
            height={113.97}
          />
          <img
            src={staySecureSticker}
            alt="a light blue square with the words stay secure"
            className="absolute top-20"
            width={175}
            height={176}
          />
        </div>
      </div>

      <div className="text-center">
        <img
          src={heroLogoSticker}
          alt="a black square with a yellow square inside it"
          className="m-auto w-32.25 h-32.25 mt-4"
        />

        <h1 className="text-[4em] font-bold leading-17 mt-9.75 pr-14.25 pl-14.25">
          Dozens of apps. <br />
          One subscription. <br />
          $9.99
        </h1>

        <div className="mt-[3em] flex items-center justify-center">
          <button className="text-black-600 bg-white-100 tracking-[1px] py-3.5 pr-7.75 pl-8 rounded-md mr-5">
            Try free for 7 days
          </button>
          <div className="hero-social-icons flex-center mr-3">
            <img src={appleIcon} alt="an apple icon" className="w-8 h-8" />
          </div>

          <div className="hero-social-icons flex-center">
            <img src={googleIcon} alt="a google icon" />
          </div>
        </div>
        <p className="mt-[27.5px] w-[320px] m-auto text-[18px] leading-[32.04px]">
          Power up your workflow with Setapp, a smart way to get apps.
        </p>
      </div>

      <div className="mt-16 relative">
        <img
          src={fixWifiSticker}
          alt="a yellow square with the words fix wifi"
        />
        <img
          src={planYourDaySticker}
          alt="a blue square with the words plan your day"
          className="absolute top-16.25 right-32.5"
        />

        <div className="mt-11.25 relative">
          <img
            src={converterSticker}
            alt="a flower shaped like shape with the words convert tech to jpg"
            className="absolute right-0 mt-[44.8px] z-10"
          />
          <img
            src={manageYourMacSticker}
            alt="a pink square with the words manage your mac"
            className="absolute top-27.5 right-15 mt-10.75 z-0"
          />
          <img
            src={codeEasierSticker}
            alt="a yellow square with the words code easier"
            className="absolute top-61.25 right-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
