const Contact = ({ submit,handleSubmit,register}) => {
  return (
    <div className="bg-black px-4 xsm:px-7 py-10 lg:py-16 grid gap-9 smd:flex smd:gap-0 smd:justify-between lg:justify-around">
        <div className="grid gap-5 smd:block">
          <h1 className="text-white text-3xl xl:text-5xl font-bold smd:mb-8">Let's talk business</h1>
          <p className="text-[#8491A0] smd:max-w-[88%] lg:max-w-[520px]">Now that you know a lot about me, let me know if you are interested to work with me.</p>
        </div>
        <form onSubmit={handleSubmit(submit)} className="grid gap-8 text-white">
          <div className="grid gap-2 xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96">
            <label className="text-sm" htmlFor="name">
              Name
            </label>
            <input
              className="outline-none px-2 py-1 rounded-sm h-12 bg-[#181823] border-0"
              id="name"
              type="text"
              autoComplete="off"
              {...register("name")}
            />
          </div>
          <div className="grid gap-2 xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96">
            <label className="text-sm" htmlFor="email">
              Correo
            </label>
            <input
              className="outline-none px-2 py-1 rounded-sm h-12 bg-[#181823] border-0"
              id="email"
              type="text"
              autoComplete="off"
              {...register("email")}
            />
          </div>
          <div className="grid gap-2 xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96">
            <label className="text-sm" htmlFor="message">
              Message
            </label>
            <textarea
              className="outline-none px-2 py-1 rounded-sm h-24 bg-[#181823] border-0"
              id="message"
              type="text"
              autoComplete="off"
              {...register("message")}
            ></textarea>
          </div>
          <button className="outline-none py-5 mt-1 font-medium bg-[#5221E6] xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96">LET'S GET STARTED</button>
        </form>
    </div>
  )
}
export default Contact