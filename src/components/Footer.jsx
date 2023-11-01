const Footer = () => {
  return (
    <footer className="bg-[#181823] px-4 xsm:px-7 xl:px-12 pt-10 pb-28 smd:flex smd:justify-between">
      <div className="">
        <div className="text-white text-4xl font-[Oswald] font-bold mb-8"><p>Rajhu.A</p></div>
        <div className="flex gap-3 text-white mb-9">
          <a href="linkedin.com"><i className='bx bxl-linkedin-square'></i></a>
          <a href=""><i className='bx bxl-github'></i></a>
        </div>
      </div>
      <div className="text-white flex text-sm">
        <ul className="w-36 xsm:w-52 xsmd:w-64 smd:w-44 leading-10">
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