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
    <footer className="pt-[10em] pr-[30px] pb-[40px]">
      <div className="bg-gray-400 w-full h-[1px]"></div>

      <div className="pl-[40px]">
        <div className="h-[325px] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-[12px] mt-[60px] ">
              <img src={logo} alt="a yellow square" width={20} height={32} />
              <img
                src={appName}
                alt="a white text with the app name"
                width={70}
                height={14}
              />
            </div>

            <div className="mt-[78px]">
              <div className="flex items-center gap-[3.04px]">
                <p>Updates from our team, written with love </p>
                <img
                  src={heartIcon}
                  alt="a pink heart icon"
                  width={16}
                  height={16}
                />
              </div>

              <div className="mt-[24px] flex items-center ">
                <input
                  type="text"
                  className="bg-black-500 h-[50.22px] w-[388px] px-[12px] rounded-l-[6px] outline-none"
                  placeholder="Enter your email"
                />
                <div className="bg-white-100 w-[54px] h-[50.22px] rounded-r-[6px] flex items-center justify-center ">
                  <img src={rightArrow} alt="a black right arrow" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center mt-[60px]">
            <div className="h-[325px] w-[230px]">
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

            <div className="h-[325px] w-[230px]">
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

            <div className="h-[325px] w-[230px]">
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

        <div className="mt-[40px] flex items-center justify-between">
          <div className="flex items-center gap-[1px]">
            <span className="bg-gray-200">DMCA</span>
            <span className="bg-black-500 uppercase ">Protected</span>
          </div>

          <div className="flex items-center gap-[10px] ">
            <img src={flag} alt="an american flag" />
            <span className="text-[16px]">English</span>
            <img src={arrowDown} alt="a white arrow pointing down" />
          </div>
        </div>

        <div className="mt-[40px] border-t-1 border-gray-300">
          <div className="mt-[28px] flex items-center gap-[10px] justify-between">
            <p className="text-[12px] ">
              © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork,
              P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
            </p>

            <div className="flex items-center gap-[10px]">
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

          <div className="flex items-center gap-[12.67px] mt-[19px]">
            <span className="text-gray-200 text-[12px]">Terms of Use</span>
            <span className="text-gray-200 text-[12px]">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
