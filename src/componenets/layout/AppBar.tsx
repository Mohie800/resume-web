import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
const AppBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <div className="container max-w-[1250px] static">
        <nav>
          <div className="lg:flex block lg:relative px-2 py-5 justify-between relative">
            <img src={logo} alt="logo" width={57} />
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none drop-shadow-md absolute right-0 top-8"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div
              className={`lg:flex justify-center lg:justify-end ${
                navbarOpen ? " flex" : " hidden"
              }`}
              id="navbar-default"
            >
              <div className="lg:gap-12 flex flex-col lg:flex-row list-none lg:ml-auto absolute lg:static z-20 backdrop-blur-sm w-full">
                <div className="flex gap-6 flex-col lg:flex-row list-none lg:ml-auto">
                  <button className="bg-transparent text-[#14153A] ">
                    Create resume
                  </button>
                  <button className="bg-transparent text-[#14153A]">
                    Test CV
                  </button>
                  <button className="bg-transparent text-[#14153A]">
                    Search jobs
                  </button>
                </div>
                <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <Link
                    to="/home"
                    className="text-white bg-[#367BFC] hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 pt-3.5 pb-3.5 me-2 mb-2 text-center"
                  >
                    Login
                  </Link>
                  <button className="text-[#24E3C2] bg-[#E3FFFA] hover:bg-[#cdfbf3] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2">
                    Download app
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default AppBar;
