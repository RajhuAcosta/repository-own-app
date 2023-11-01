const MyProjects = () => {
  return (
    <section id="myProjects" className="bg-black px-4 xsm:px-7 py-5 xsm:py-6 md:grid md:grid-cols-[1fr_1fr] md:gap-8 2xl:gap-0">
      <div className="2xl:mx-auto">
        <p className="text-[#8491A0] font-bold mb-1.5">MY PROJECTS</p>
        <h1 className="text-white text-3xl 3xl:text-5xl 2xl:max-w-[700px] font-bold mb-7">Work that I’ve done for the past 8 years</h1>
        <article className="bg-[#181823] mb-6 2xl:w-[700px]">
          <img src="/picture-projects/screen-appweather.png" alt="" />
          <div className="px-3 3xl:px-6 py-5 3xl:py-8">
            <h3 className="text-white font-semibold text-xl 3xl:text-2xl mb-2">Weather App</h3>
            <p className="text-[#8491A0] 3xl:text-lg mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nihil fugit saepe quibusdam dolorem quis assumenda hic exercitationem.</p>
            <div className="flex justify-end">
              <button className="text-white 3xl:text-lg border-[#5221E6] border-b mx-3 py-1 hover:bg-[#5221E6] hover:mx-0 hover:px-3 hover:rounded-full transition-all"><a href="https://app-weather-three.vercel.app/" target="_blank">Live view</a></button>
            </div>
          </div>
        </article>
        <article className="bg-[#181823] mb-6 2xl:w-[700px]">
          <img src="/picture-projects/screen-pokedex.png" alt="" />
          <div className="px-3 3xl:px-6 py-5 3xl:py-8">
            <h3 className="text-white font-semibold text-xl 3xl:text-2xl mb-2">Pokedex</h3>
            <p className="text-[#8491A0] 3xl:text-lg mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nihil fugit saepe quibusdam dolorem quis assumenda hic exercitationem.</p>
            <div className="flex justify-end">
              <button className="text-white 3xl:text-lg border-[#5221E6] border-b mx-3 py-1 hover:bg-[#5221E6] hover:mx-0 hover:px-3 hover:rounded-full transition-all"><a href="https://pokedex-app-web-omega.vercel.app/" target="_blank">Live view</a></button>
            </div>
          </div>
        </article>
      </div>
      <div className="2xl:mx-auto">
        <article className="bg-[#181823] mb-6 2xl:w-[700px]">
          <img src="/picture-projects/screen-rickandmorty.png" alt="" />
          <div className="px-3 3xl:px-6 py-5 3xl:py-8">
            <h3 className="text-white font-semibold text-xl 3xl:text-2xl mb-2">Rick and Morty dimensions</h3>
            <p className="text-[#8491A0] 3xl:text-lg mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nihil fugit saepe quibusdam dolorem quis assumenda hic exercitationem.</p>
            <div className="flex justify-end">
              <button className="text-white 3xl:text-lg border-[#5221E6] border-b mx-3 py-1 hover:bg-[#5221E6] hover:mx-0 hover:px-3 hover:rounded-full transition-all"><a href="https://rick-and-morty-appweb.vercel.app/" target="_blank">Live view</a></button>
            </div>
          </div>
        </article>
        <article className="bg-[#181823] mb-8 3xl:mb-14 2xl:w-[700px]">
          <img src="/picture-projects/screen-fortunecookies.png" alt="" />
          <div className="px-3 3xl:px-6 py-5 3xl:py-8">
            <h3 className="text-white font-semibold text-xl 3xl:text-2xl mb-2">Fortune Cookies</h3>
            <p className="text-[#8491A0] 3xl:text-lg mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nihil fugit saepe quibusdam dolorem quis assumenda hic exercitationem.</p>
            <div className="flex justify-end">
              <button className="text-white 3xl:text-lg border-[#5221E6] border-b mx-3 py-1 hover:bg-[#5221E6] hover:mx-0 hover:px-3 hover:rounded-full transition-all"><a href="https://galletas-fortuna-luck.vercel.app/" target="_blank">Live view</a></button>
            </div>
          </div>
        </article>
        <div className="flex justify-center">
          <button className="text-white 3xl:font-medium hover:text-[#5221E6] px-5 py-3 border-[#5221E6] hover:bg-white hover:border-0 border transition-all">View all projects</button>
        </div>
      </div>
    </section>
  )
}

export default MyProjects