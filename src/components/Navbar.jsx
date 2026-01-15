import logo from "/assets/logo.png";
import flag from "/assets/flag.png";

const Navbar = () => {
  return (
    <nav className="flex-between px-[2.5em] mt-[1.5em]">
      <div>
        <img src={logo} alt="a yellow square shaped logo" />
      </div>

      <div className="flex items-center gap-[1.9em]">
        <ul className="flex items-center gap-7.5 text-[14px] nav-text">
          <li>
            <a href="#"></a>How it works
          </li>
          <li>
            <a href="#"></a>All apps
          </li>
          <li>
            <a href="#"></a>For Teams
          </li>
          <li>
            <a href="#"></a>Blog
          </li>
          <li>
            <a href="#"></a>Podcast
          </li>
        </ul>

        <div className="bg-white w-px h-5 "></div>

        <div className="flex items-center gap-[2em]">
          <img src={flag} alt="the american flag" />
          <button className="nav-text">Sign In</button>
          <button className="w-25.25 h-[33.29px] text-[14px] rounded-md border border-white-100 tracking-[1px]">
            Try Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
