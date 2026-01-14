import logo from "/assets/logo.png";
import flag from "/assets/flag.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-[1.272em] px-[2.5em]">
      <div>
        <img src={logo} alt="a yellow square shaped logo" />
      </div>

      <div className="flex items-center gap-[1.5em]">
        <ul className="flex items-center gap-[1.875em] font-medium tracking-[.9px]">
          <li>How it works</li>
          <li>All apps</li>
          <li>Pricing</li>
          <li>For Teams</li>
          <li>Blog</li>
          <li>Podcast</li>
        </ul>

        <div className="bg-white w-[1px] h-[20px] "></div>

        <div className="flex items-center gap-[2em]">
          <img src={flag} alt="the american flag" />
          <button className="font-medium tracking-[.9px]">Sign In</button>
          <button className="w-[6.314em] h-[2em] rounded-md border border-white-100 tracking-[1px]">
            Try Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
