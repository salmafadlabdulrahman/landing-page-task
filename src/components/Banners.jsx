import laptopIcon from "/assets/macbook-logo.png";
import mainBanner from "/assets/banner-1.png";
import codeBanner from "/assets/code-banner.png";
import codeIcon from "/assets/code-icon.png";
import meeterLogo from "/assets/meeter-logo.png";
import meeterBanner from "/assets/meeter-banner.png";
import rightArrow from "/assets/right-arrow-long.png";

const Banners = () => {
  return (
    <section className="w-295 border-y border-gray-300 mt-32 m-auto pb-22.5">
      <div className="mt-25 flex-between">
        <h3 className="text-4xl font-semibold tracking-wide">
          {" "}
          What you get on Setapp.
        </h3>
        <p className="text-[18px] w-150 leading-8">
          With a single monthly subscription at $9.99, you get 240+ apps for
          your Mac.
        </p>
      </div>

      <div className="mt-22 bg-pink-300 rounded-[20px] px-9.25">
        <div className="flex items-center gap-9 pt-15">
          <img
            src={laptopIcon}
            alt="a pink laptop icon"
            width={80}
            height={80}
          />
          <div className="text-black-600">
            <p className="text-[26px] font-semibold">Keep your Mac clean</p>
            <p>Remove junk, scan for malware, wipe email attachments</p>
          </div>
        </div>
        <img
          src={mainBanner}
          alt="a laptop screen with a sidebar"
          width={1106}
          height={465}
        />
      </div>

      <div className="flex items-center gap-5 mt-5">
        <div className="bg-yellow-300 rounded-[20px] pb-15">
          <img src={codeBanner} alt="a black square that has code in it" width={580} height={400.50} />
          <div className="px-15">
            <img
              src={codeIcon}
              alt="a blue square with a play icon in it"
              width={80}
              height={80}
            />
            <h4 className="sub-banners-text text-black-600 h-10">
              Write code
            </h4>
            <p className="text-[18px] text-black-600">
              Create applications in more than 25 languages
            </p>
          </div>
        </div>

        <div>
          <div className="bg-blue-300 rounded-[20px] pt-15">
            <div className="px-15">
              <img
                src={meeterLogo}
                alt="a blue circle with white sticks in it like sound waves"
                width={68}
                height={68}
              />
              <h4 className="sub-banners-text mt-4.75">
                Join meetings in a click
              </h4>
              <p className="text-[18px]">
                Quickly access links to your meetings from menu bar
              </p>
            </div>
            <img
              src={meeterBanner}
              alt="a black square with zoom calls banners in it"
              width={580}
              height={360}
            />
          </div>
        </div>
      </div>

      <div className="mt-22">
        <div className="flex-center gap-2.75">
          <img src={rightArrow} alt="a white arrow pointing right" />
          <a to={"/"} className="font-medium text-[20px] tracking-[1.6px]">
            View all superpowers
          </a>
        </div>

        <div className="mt-22 flex-between">
          <h3 className="font-semibold text-[36px]">Your Setapp journey.</h3>
          <p className="text-[18px] w-150">
            Type in your task into Setapp search and get instant app
            recommendations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banners;
