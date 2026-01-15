import logo from "/assets/footer-icon.png";
import appName from "/assets/app-name.png";
import heartIcon from "/assets/heart-icon.png";
import rightArrow from "/assets/footer-arrow-right.png";
import flag from "/assets/flag.png";
import arrowDown from "/assets/arrow-down.png";
import facebookIcon from "/assets/footer-facebook-icon.png";
import instaIcon from "/assets/footer-insta-icon.png";
import twitterIcon from "/assets/footer-twitter-icon.png";
import youtubeIcon from "/assets/footer-youtube-icon.png";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <footer className="bg-black-600 text-white pt-10 pb-10">
      <div className="h-px bg-gray-400 w-full" />

      <div className="max-w-7xl mx-auto px-10 mt-14">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" />
              <img src={appName} alt="Setapp" />
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-1">
                <p className="text-sm">
                  Updates from our team, written with love
                </p>
                <img src={heartIcon} alt="heart" />
              </div>

              <div className="mt-6 flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-black-500 h-12 px-4 rounded-l-md outline-none w-96"
                />
                <button className="bg-white-100 w-14 h-12 rounded-r-md flex-center">
                  <img src={rightArrow} alt="arrow" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-14">
            <FooterColumn
              items={[
                "Home",
                "How It Works",
                "All Apps",
                "Pricing",
                "Setapp for Teams",
                "Blog",
                "Podcast",
                "Download",
              ]}
            />
            <FooterColumn
              items={[
                "About",
                "Support",
                "Education Discount",
                "Family Plan",
                "For Developers",
                "Gift Cards",
                "Redeem Card or Code",
                "Setapp Reviews",
                "Affiliate Program",
                "Mac Developer Survey 2023",
              ]}
            />
            <FooterColumn
              items={[
                "Getting started with Setapp",
                "Remote access to other Mac",
                "Fix macOS Ventura problems",
                "Best productivity apps",
                "Best YouTube downloaders",
                "Uninstall apps",
              ]}
            />
          </div>
        </div>

        <div className="mt-10 flex-between">
          <div className="flex items-center gap-1 text-xs">
            <span className="bg-gray-200 px-1">DMCA</span>
            <span className="bg-black-500 px-1 uppercase">Protected</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={flag} alt="flag" />
            <span>English</span>
            <img src={arrowDown} alt="arrow" />
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 pt-7">
          <div className="flex-between">
            <p className="text-xs max-w-[70%]">
              © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork,
              P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
            </p>

            <div className="flex items-center gap-3">
              <img src={facebookIcon} alt="facebook" />
              <img src={twitterIcon} alt="twitter" />
              <img src={instaIcon} alt="instagram" />
              <img src={youtubeIcon} alt="youtube" />
            </div>
          </div>

          <div className="flex gap-4 mt-5">
            <span className="footer-terms-policy">Terms of Use</span>
            <span className="footer-terms-policy">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
