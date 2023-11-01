const Presentation = () => {
  return (
    <main className="relative bg-black lg:flex lg:justify-end">
      <picture className="">
        <img className="lg:absolute z-10 w-[100%] lg:left-0 lg:w-[45%] lg:h-[90%]" src="/presentation_image-darkbg.png" alt="hombre mirando hacia arriba" />
      </picture>
      <div className="px-4 xsm:px-7 lg:px-16 3xl:px-32 py-10 lg:py-14 3xl:py-24 text-white bg-[#181823] text-3xl xsm:text-4xl smd:text-5xl md:text-[8vw] lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium grid gap-5 lg:w-[70%] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] 3xl:h-[853.6px]">
      {/* <div className="px-4 xsm:px-7 py-10 text-white bg-[#181823] text-3xl font-medium grid gap-5 lg:absolute lg:top-0 lg:right-0 lg:w-[600px] lg:h-[900px]"> */}
        <div className="lg:z-40">
            <h1 className="">
                I’m Rajhu Acosta.
                <br/>
                A fronted developer
                <p className="text-[#FFFFFF80]">
                based in Perú.
                </p>
            </h1>
        </div>
        <p className="text-base 3xl:text-2xl font-normal text-white/90 lg:z-30">
          I’m probably the most passionate designer you will ever get to work
          with. If you have a great project that needs some amazing skills, I’m
          your guy.
        </p>
      </div>
    </main>
  );
};

export default Presentation;
