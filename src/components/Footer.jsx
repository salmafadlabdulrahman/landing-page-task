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

const Footer = () => {
  return (
    <footer className="pt-[1em] pr-7.5 pb-10 bg-black-600">
      <div className="bg-black-400 w-full h-px"></div>

      <div className="pl-10 mt-15">
        <div className="h-81.25 flex justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="a yellow square" width={20} height={32} />
              <img
                src={appName}
                alt="a white text with the app name"
                width={70}
                height={14}
              />
            </div>

            <div className="mt-19.5">
              <div className="flex items-center gap-0.75">
                <p>Updates from our team, written with love </p>
                <img
                  src={heartIcon}
                  alt="a pink heart icon"
                  width={16}
                  height={16}
                />
              </div>

              <div className="mt-6 flex items-center ">
                <input
                  type="text"
                  className="bg-black-500 h-12.5 w-97 px-3 rounded-l-md outline-none"
                  placeholder="Enter your email"
                />
                <div className="bg-white-100 w-13.5 h-[50.22px] rounded-r-md flex-center">
                  <img src={rightArrow} alt="a black right arrow" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="h-81.25 w-57.5">
              <ul>
                <li>Home</li>
                <li>How It Works</li>
                <li>All Apps</li>
                <li>Pricing</li>
                <li>Setapp for Teams</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Download</li>
              </ul>
            </div>

            <div className="h-81.25 w-57.5">
              <ul>
                <li>About</li>
                <li>Support</li>
                <li>Education Discount</li>
                <li>Family Plan</li>
                <li>For Developers</li>
                <li>Gift Cards</li>
                <li>Redeem Card or Code</li>
                <li>Setapp Reviews</li>
                <li>Affiliate Program</li>
                <li>Mac Developer Survey 2023</li>
              </ul>
            </div>

            <div className="h-81.25 w-57.5">
              <ul>
                <li>Getting started with Setapp</li>
                <li>Remote access to other Mac</li>
                <li>Fix macOS Ventura</li>
                <li>problems</li>
                <li>Best productivity apps</li>
                <li>Best YouTube downloaders</li>
                <li>Uninstall apps</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex-between">
          <div className="flex items-center gap-px">
            <span className="bg-gray-200">DMCA</span>
            <span className="bg-black-500 uppercase ">Protected</span>
          </div>

          <div className="flex items-center gap-2.5 ">
            <img src={flag} alt="an american flag" />
            <span className="text-[16px]">English</span>
            <img src={arrowDown} alt="a white arrow pointing down" />
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300">
          <div className="mt-7 flex-between gap-2.5 ">
            <p className="text-[12px]">
              © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork,
              P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
            </p>

            <div className="flex items-center gap-2.5">
              <img
                src={facebookIcon}
                alt="a gray circle with the letter f in it "
              />
              <img src={twitterIcon} alt="a gray circle with a bird in it " />
              <img src={instaIcon} alt="a gray circle with a camera in it " />
              <img
                src={youtubeIcon}
                alt="a gray circle with a play button in it "
              />
            </div>
          </div>

          <div className="flex items-center gap-3.25 mt-4.75">
            <span className="footer-terms-policy">Terms of Use</span>
            <span className="footer-terms-policy">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
