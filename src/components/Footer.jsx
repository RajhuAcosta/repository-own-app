import { Link } from "react-scroll";

const Footer = ({ windowWidth, language }) => {
  return (
    <>
      {language == "spanish" ? (
        <footer className="bg-[#181823] px-4 xsm:px-7 xl:px-12 3xl:px-20 pt-10 pb-28 smd:flex smd:justify-between">
          <div className="">
            <div className="text-white text-4xl font-[Oswald] font-bold mb-8">
              <p>Rajhu.A</p>
            </div>
            <div className="flex gap-3 text-white mb-9">
              <a
                href="https://www.linkedin.com/in/rajhu-acosta-29814629a/"
                target="_blank"
              >
                <i
                  className={`bx bxl-linkedin-square ${
                    windowWidth >= 1920 ? "bx-md" : "bx-sm"
                  } text-[#0077B5] hover:text-[#466efe]`}
                ></i>
              </a>
              <a href="https://github.com/RajhuAcosta" target="_blank">
                <i
                  className={`bx bxl-github 3xl:bx-md ${
                    windowWidth >= 1920 ? "bx-md" : "bx-sm"
                  } text-[#6E40C9] hover:text-[#6CC644]`}
                ></i>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rajhuacosta1008@gmail.com&su=Asunto del correo&body=Cuerpo del mensaje"
                target="_blank"
              >
                <i
                  className={`bx bxl-gmail 3xl:bx-md ${
                    windowWidth >= 1920 ? "bx-md" : "bx-sm"
                  } text-[#EA4335] hover:text-[#fb9ffe]`}
                ></i>
              </a>
              <a href="https://wa.me/51957362285" target="_blank">
                <i
                  className={`bx bxl-whatsapp 3xl:bx-md ${
                    windowWidth >= 1920 ? "bx-md" : "bx-sm"
                  } text-[#25D366] hover:text-[#e2f76a]`}
                ></i>
              </a>
            </div>
          </div>
          <div className="text-white 3xl:text-lg flex text-sm 3xl:mr-24">
            <ul className="w-36 xsm:w-52 xsmd:w-64 smd:w-44 3xl:w-72 leading-10">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={300}
                  style={{ cursor: "pointer" }}
                >
                  <span className="hover:underline hover:text-[#5221E6] transition-all">
                    Inicio
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="aboutMe"
                  smooth={true}
                  duration={300}
                  style={{ cursor: "pointer" }}
                >
                  <span className="hover:underline hover:text-[#5221E6] transition-all">
                    Sobre mí
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="myProjects"
                  smooth={true}
                  duration={400}
                  style={{ cursor: "pointer" }}
                >
                  <span className="hover:underline hover:text-[#5221E6] transition-all">
                    Proyectos
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      ) : (
        <footer className="bg-[#181823] px-4 xsm:px-7 xl:px-12 3xl:px-20 pt-10 pb-28 smd:flex smd:justify-between">
          <div className="">
            <div className="text-white text-4xl font-[Oswald] font-bold mb-8">
              <p>Rajhu.A</p>
            </div>
            <div className="flex gap-3 text-white mb-9">
              <a
                href="https://www.linkedin.com/in/rajhu-acosta-29814629a/"
                target="_blank"
              >
                <i
                  className={`bx bxl-linkedin-square ${
                    windowWidth >= 1920 ? "bx-md" : "bx-sm"
                  } text-[#0077B5] hover:text-[#466efe]`}
                ></i>
              </a>
              <a href="https://github.com/RajhuAcosta" target="_blank">
                <i
                  className={`bx bxl-github 3xl:bx-md ${
                    windowWidth >= 1920 ? "bx-md" : "bx-sm"
                  } text-[#6E40C9] hover:text-[#6CC644]`}
                ></i>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rajhuacosta1008@gmail.com&su=Asunto del correo&body=Cuerpo del mensaje"
                target="_blank"
              >
                <i
                  className={`bx bxl-gmail 3xl:bx-md ${
                    windowWidth >= 1920 ? "bx-md" : "bx-sm"
                  } text-[#ff2525] hover:text-[#ff6b3d]`}
                ></i>
              </a>
              <a href="https://wa.me/51957362285" target="_blank">
                <i
                  className={`bx bxl-whatsapp 3xl:bx-md ${
                    windowWidth >= 1920 ? "bx-md" : "bx-sm"
                  } text-[#25D366] hover:text-[#e2f76a]`}
                ></i>
              </a>
            </div>
          </div>
          <div className="text-white 3xl:text-lg flex text-sm 3xl:mr-24">
            <ul className="w-36 xsm:w-52 xsmd:w-64 smd:w-44 3xl:w-72 leading-10">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={300}
                  style={{ cursor: "pointer" }}
                >
                  <span className="hover:underline hover:text-[#5221E6] transition-all">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="aboutMe"
                  smooth={true}
                  duration={300}
                  style={{ cursor: "pointer" }}
                >
                  <span className="hover:underline hover:text-[#5221E6] transition-all">
                    About me
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="myProjects"
                  smooth={true}
                  duration={400}
                  style={{ cursor: "pointer" }}
                >
                  <span className="hover:underline hover:text-[#5221E6] transition-all">
                    Proyects
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      )}
    </>
  );
};
export default Footer;
