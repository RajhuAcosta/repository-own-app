const Contact = ({ useForm, ValidationError, language }) => {
  const [state, handleSubmit] = useForm("meqyqvjn");
  if (state.succeeded) {
    // alert("Mensaje enviado correctamente");
    return (
      <section
        id="contactMe"
        className="3xl:flex 3xl:justify-center bg-black relative"
      >
        <div className="bg-black px-4 xsm:px-7 py-10 lg:py-16 grid gap-9 smd:flex smd:gap-0 smd:justify-between lg:justify-around 3xl:justify-stretch">
          <div className="grid gap-5 smd:block 3xl:mr-28">
            <h1 className="text-white text-3xl xl:text-5xl font-bold smd:mb-8">
              Let's talk business
            </h1>
            <p className="text-[#8491A0] 3xl:text-xl smd:max-w-[88%] lg:max-w-[520px] 3xl:max-w-[450px]">
              Now that you know a lot about me, let me know if you are
              interested to work with me.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-8 text-white">
            <div className="grid gap-2 xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96">
              <label className="text-sm" htmlFor="name">
                Name
              </label>
              <input
                className="outline-none px-2 py-1 rounded-sm h-12 bg-[#181823] border-0"
                id="name"
                name="name"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="grid gap-2 xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96">
              <label className="text-sm" htmlFor="email">
                Correo
              </label>
              <input
                className="outline-none px-2 py-1 rounded-sm h-12 bg-[#181823] border-0"
                id="email"
                name="email"
                type="email"
                autoComplete="off"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="grid gap-2 xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96">
              <label className="text-sm" htmlFor="message">
                Message
              </label>
              <textarea
                className="outline-none px-2 py-1 rounded-sm h-24 bg-[#181823] border-0"
                id="message"
                name="message"
                type="text"
                autoComplete="off"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              className="outline-none py-5 mt-1 font-medium bg-[#5221E6] xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96 hover:bg-white hover:text-[#5221E6] transition-all"
              type="submit"
              disabled={state.submitting}
            >
              LET'S GET STARTED
            </button>
          </form>
        </div>
        <div className="top-0 bottom-0 left-0 right-0 3xl:-translate-x-40 3xl:translate-y-10 3xl:max-w-[300px] flex justify-center items-center">
          <p className="text-white absolute bg-green-500 px-7 py-5 font-medium rounded-md">
            Email sended succesfully
          </p>
        </div>
      </section>
    );
  }
  return (
    <>
      {language == "spanish" ? (
        <section
          id="contactMe"
          className="3xl:flex 3xl:justify-center bg-black"
        >
          <div className="bg-black px-4 xsm:px-7 py-10 lg:py-16 grid gap-9 smd:flex smd:gap-0 smd:justify-between lg:justify-around 3xl:justify-stretch">
            <div className="grid gap-5 smd:block 3xl:mr-28">
              <h1 className="text-white text-3xl xl:text-5xl font-bold smd:mb-8">
                Contácteme
              </h1>
              <p className="text-[#8491A0] 3xl:text-xl smd:max-w-[88%] lg:max-w-[520px] 3xl:max-w-[430px]">
                Ahora que conoce más sobre mí y mis habilidades, déjeme saber su
                interés sobre una posible oportunidad de empleo.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-8 text-white">
              <div className="grid gap-2 xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96">
                <label className="text-sm" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="outline-none px-2 py-1 rounded-sm h-12 bg-[#181823] border-0"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                />
              </div>
              <div className="grid gap-2 xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96">
                <label className="text-sm" htmlFor="email">
                  Correo
                </label>
                <input
                  className="outline-none px-2 py-1 rounded-sm h-12 bg-[#181823] border-0"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="grid gap-2 xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96">
                <label className="text-sm" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  className="outline-none px-2 py-1 rounded-sm h-24 bg-[#181823] border-0"
                  id="message"
                  name="message"
                  type="text"
                  autoComplete="off"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                className="outline-none py-5 mt-1 font-medium bg-[#5221E6] xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96 hover:bg-white hover:text-[#5221E6] transition-all"
                type="submit"
                disabled={state.submitting}
              >
                ¡COMENCEMOS!
              </button>
            </form>
          </div>
        </section>
      ) : (
        <section
          id="contactMe"
          className="3xl:flex 3xl:justify-center bg-black"
        >
          <div className="bg-black px-4 xsm:px-7 py-10 lg:py-16 grid gap-9 smd:flex smd:gap-0 smd:justify-between lg:justify-around 3xl:justify-stretch">
            <div className="grid gap-5 smd:block 3xl:mr-28">
              <h1 className="text-white text-3xl xl:text-5xl font-bold smd:mb-8">
                Let's talk business
              </h1>
              <p className="text-[#8491A0] 3xl:text-xl smd:max-w-[88%] lg:max-w-[520px] 3xl:max-w-[450px]">
                Now that you know a lot about me, let me know if you are
                interested to work with me.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-8 text-white">
              <div className="grid gap-2 xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96">
                <label className="text-sm" htmlFor="name">
                  Name
                </label>
                <input
                  className="outline-none px-2 py-1 rounded-sm h-12 bg-[#181823] border-0"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                />
              </div>
              <div className="grid gap-2 xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96">
                <label className="text-sm" htmlFor="email">
                  Correo
                </label>
                <input
                  className="outline-none px-2 py-1 rounded-sm h-12 bg-[#181823] border-0"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="grid gap-2 xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96">
                <label className="text-sm" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="outline-none px-2 py-1 rounded-sm h-24 bg-[#181823] border-0"
                  id="message"
                  name="message"
                  type="text"
                  autoComplete="off"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                className="outline-none py-5 mt-1 font-medium bg-[#5221E6] xsm:w-[80%] xsm:mx-auto smd:mx-0 smd:w-64 smmd:w-72 md:w-80 lg:w-96 hover:bg-white hover:text-[#5221E6] transition-all"
                type="submit"
                disabled={state.submitting}
              >
                LET'S GET STARTED
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};
export default Contact;
