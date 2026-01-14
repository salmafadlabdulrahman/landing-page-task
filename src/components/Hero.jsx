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
    <section>
      <div>
        <img
          src={workWithPicsSticker}
          alt="a yellow square with work pics phrase in it"
        />
        <img src={macPawSticker} alt="a pink circle with a paw in it" />
        <img
          src={vpnSticker}
          alt="a light blue circle with the words ad blocker"
        />
        <img
          src={teamworkSticker}
          alt="a blue rectangle with the words boost team work"
        />
        <img
          src={staySecureSticker}
          alt="a light blue square with the words stay secure"
        />
      </div>

      <div>
        <img
          src={heroLogoSticker}
          alt="a black square with a yellow square inside it"
        />
        <h1>Dozens of apps. One subscription. $9.99</h1>

        <div>
          <button>Try free for 7 days</button>
          <img src={appleIcon} alt="an apple icon" />
          <img src={googleIcon} alt="a google icon" />
        </div>
        <p>Power up your workflow with Setapp, a smart way to get apps.</p>
      </div>

      <div>
        <img
          src={fixWifiSticker}
          alt="a yellow square with the words fix wifi"
        />
        <img
          src={planYourDaySticker}
          alt="a blue square with the words plan your day"
        />
        <img
          src={converterSticker}
          alt="a flower shaped like shape with the words convert tech to jpg"
        />
        <img src={manageYourMacSticker} alt="a pink square with the words manage your mac" />
        <img src={codeEasierSticker} alt="a yellow square with the words code easier" />
      </div>
    </section>
  );
};

export default Hero;
