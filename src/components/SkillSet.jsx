const SkillSet = () => {
  return (
    <section className="px-4 xsm:px-7 xl:px-12 3xl:px-20 py-10 lg:py-16 3xl:py-20 text-white bg-black font-medium grid gap-5 xxsm:gap-7 xsm:gap-8 md:gap-11 lg:flex lg:justify-between">
        <div className="grid gap-6 lg:block">
            <p className="font-bold lg:mb-10 text-3xl 3xl:text-5xl">
                Skillset
            </p>
            <p className="text-base 3xl:text-xl font-normal text-[#8491A0] lg:w-[300px] 3xl:w-[600px]">
                With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.
            </p>
        </div>
        <div className="grid gap-6 text-[#5221E6] xxsm:mx-auto xxsm:text-center xsm:flex xsm:mx-auto xsm:gap-20 md:gap-36 lg:flex lg:gap-48">
            <div className="grid gap-6">
                <div className="grid gap-3 xsm:gap-5">
                    <picture className="xxsm:flex xxsm:justify-center">
                        <img className="w-12" src="/puzzle.png" alt="pieza de rompecabezas" />
                    </picture>
                    <p className="text-2xl 3xl:text-3xl text-white ">
                        Frameworks
                    </p>
                    <div>
                        <p className="text-base 3xl:text-2xl text-[#8491A0] flex gap-2 3xl:gap-4 items-center xxsm:justify-center">
                            React <i className='bx bxl-react'></i>
                        </p>
                    </div>
                </div>
                <div className="grid gap-3 xsm:gap-5">
                    <picture className="xxsm:flex xxsm:justify-center">
                        <img className="w-12" src="/puzzle.png" alt="pieza de rompecabezas" />
                    </picture>
                    <p className="text-2xl 3xl:text-3xl text-white ">
                        Languages
                    </p>
                    <div>
                        <p className="text-base 3xl:text-2xl text-[#8491A0] flex gap-2 3xl:gap-4 items-center xxsm:justify-center">
                            CSS{/*/Tailwind CSS*/} <i className='bx bxl-css3'></i>
                        </p>
                        <p className="text-base 3xl:text-2xl text-[#8491A0] flex gap-2 3xl:gap-4 items-center xxsm:justify-center">
                            Javascript{/*/JSX*/} <i className='bx bxl-javascript'></i>
                        </p>
                        <p className="text-base 3xl:text-2xl text-[#8491A0] flex gap-2 3xl:gap-4 items-center xxsm:justify-center">
                            HTML <i className='bx bxl-html5'></i>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="grid gap-3 xsm:gap-5">
                    <picture className="xxsm:flex xxsm:justify-center">
                        <img className="w-12" src="/puzzle.png" alt="pieza de rompecabezas" />
                    </picture>
                    <p className="text-2xl 3xl:text-3xl text-white  ">
                        Source Control
                    </p>
                    <div>
                        <p className="text-base 3xl:text-2xl text-[#8491A0] flex gap-2 3xl:gap-4 items-center xxsm:justify-center">
                            Git/Github <i className='bx bxl-github'></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SkillSet