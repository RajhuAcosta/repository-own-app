const Footer = ({windowWidth}) => {
  return (
    <footer className="bg-[#181823] px-4 xsm:px-7 xl:px-12 3xl:px-20 pt-10 pb-28 smd:flex smd:justify-between">
      <div className="">
        <div className="text-white text-4xl font-[Oswald] font-bold mb-8"><p>Rajhu.A</p></div>
        <div className="flex gap-3 text-white mb-9">
          <a href="https://www.linkedin.com/in/rajhu-acosta--066976253" target="_blank"><i className={`bx bxl-linkedin-square ${windowWidth>=1920?("bx-md"):("bx-sm")} text-[#2867B2] hover:text-[#0077B5]`}></i></a>
          <a href="https://github.com/RajhuAcosta" target="_blank"><i className={`bx bxl-github 3xl:bx-md ${windowWidth>=1920?("bx-md"):("bx-sm")} text-[#6E40C9] hover:text-[#6CC644]`}></i></a>
        </div>
      </div>
      <div className="text-white 3xl:text-lg flex text-sm 3xl:mr-24">
        <ul className="w-36 xsm:w-52 xsmd:w-64 smd:w-44 3xl:w-72 leading-10">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Process</li>
        </ul>
        <ul className="leading-10 smd:mr-10 md:mr-16">
          <li>Store</li>
          <li>Blog</li>
          <li>Reading list</li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer