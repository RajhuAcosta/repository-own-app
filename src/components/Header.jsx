const Header = ({windowWidth}) => {
  return (
    <>
        {windowWidth >= 1024 ? (
          // <div className="flex gap-3 text-white/70">
          //   <button className="px-3 text-black">Home</button>
          //   <button className="px-3 text-black">Work/Projects/Experience</button>
          //   <button className="px-3 text-black">About me</button>
          //   <button className="text-white bg-[#5221E6] px-3 my-0 ">Contact me</button>
          // </div>
          <header className="flex items-center">
            <div className="bg-black w-[30%] text-white font-[Oswald] font-bold text-3xl py-[1.25rem] px-7 xl:px-12 2xl:px-20">
              Rajhu A.
            </div>
            <div className="bg-[#181823] w-[70%] text-white/70 text-lg flex justify-end px-7 xl:px-12 2xl:px-20">
              <button className="px-5">Home</button>
              <button className="px-5">Work/Projects/Experience</button>
              <button className="px-5">About me</button>
              <button className="text-white bg-[#5221E6] px-5 py-6">Contact me</button>
            </div>
          </header>
        ) : (
          <header className="flex justify-between px-4 xsm:px-7 py-5 xsm:py-6 bg-black text-white">
            <div className="text-white text-xl xsm:text-2xl font-[Oswald] font-bold">Rajhu.A</div>
            <button className="flex items-end"><i className={`bx bx-menu ${windowWidth>400?("bx-md"):("bx-sm")}`}></i></button>
          </header>
        )}
    </>
    
  )
}

export default Header