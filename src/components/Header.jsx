import { Link } from "react-scroll";
const Header = ({ windowWidth }) => {
  const handleClickMenu = () => {};
  return (
    <>
      {windowWidth >= 1024 ? (
        <header className="flex items-center">
          <div className="bg-black w-[30%] text-white font-[Oswald] font-bold text-3xl py-[1.25rem] px-7 xl:px-12 2xl:px-20">
            <span className="">Rajhu A.</span>
          </div>
          <div className="bg-[#181823] w-[70%] text-white/70 text-lg flex justify-end px-7 xl:px-12 2xl:px-20">
            <button className="px-5 outline-none cursor-default">
              <Link
                to="home"
                smooth={true}
                duration={300}
                style={{ cursor: "pointer" }}
              >
                <span className=" hover:text-white hover:border-b-2 hover:border-[#5221E6]">
                  Home
                </span>
              </Link>
            </button>
            <button className="px-5 outline-none cursor-default">
              <Link
                to="myProjects"
                smooth={true}
                duration={400}
                style={{ cursor: "pointer" }}
              >
                <span className=" hover:text-white hover:border-b-2 hover:border-[#5221E6]">
                  Projects
                </span>
              </Link>
            </button>
            <button className="px-5 outline-none cursor-default">
              <Link
                to="aboutMe"
                smooth={true}
                duration={300}
                style={{ cursor: "pointer" }}
              >
                <span className=" hover:text-white hover:border-b-2 hover:border-[#5221E6]">
                  About me
                </span>
              </Link>
            </button>
            <button className="text-white bg-[#5221E6] hover:text-[#5221E6] hover:bg-white hover:font-medium outline-none px-5 py-6">
              <Link to="contactMe" smooth={true} duration={600}>
                Contact me
              </Link>
            </button>
          </div>
        </header>
      ) : (
        <header className="flex justify-between px-4 xsm:px-7 py-5 xsm:py-6 bg-black text-white">
          <div className="text-white text-xl xsm:text-2xl font-[Oswald] font-bold">
            Rajhu.A
          </div>
          <button onClick={handleClickMenu} className="flex items-end">
            <i
              className={`bx bx-menu outline-none ${
                windowWidth > 400 ? "bx-md" : "bx-sm"
              }`}
            ></i>
          </button>
        </header>
      )}
    </>
  );
};

export default Header;
