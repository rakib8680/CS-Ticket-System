const Navbar = () => {
  return (
    <div>
      {/* Main Navbar */}
      <div className="bg-white">
        <div className="navbar px-6 container mx-auto py-3">
          {/* Left - Logo*/}
          <div className="navbar-start">
            {/* mobile responsive  */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Changelog</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Download</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className="md:text-xl font-bold tracking-wide leading-none ">
              CS — Ticket System
            </a>
          </div>

          {/* Right - Nav Links + Button */}
          <div className="navbar-end gap-4">
            <ul className="menu menu-horizontal px-1 text-sm hidden lg:flex gap-4">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
            <a
              className="btn btn-sm md:btn-md  text-white border-none font-normal"
              style={{
                background: "linear-gradient(to right, #632EE3, #9F62F2)",
              }}
            >
              + &nbsp; New Ticket
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
