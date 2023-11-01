const PhilosophyAndValues = () => {
  return (
    <div className="sm:grid sm:grid-cols-[1fr_1fr]">
        <div className="bg-[#FFF3E4] px-4 xsm:px-7 xl:px-12 3xl:px-20 py-10 lg:py-16 grid gap-5 sm:block">
            <p className="text-3xl 3xl:text-5xl font-bold text-[#181823] sm:mb-6 3xl:mb-10">
                Philosophy & Values
            </p>
            <p className="text-[#5B6876] text-base 3xl:text-2xl">
                I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.
            </p>
            <a className="block mt-8 lg:mt-16 3xl:" href="https://www.linkedin.com">
                <span className="pb-1 border-b-2 border-[#89949f] font-medium 3xl:text-2xl">
                    Check my Linkedin
                </span>
            </a>
        </div>
        <picture>
            <img className="sm:h-full" src="/pr.jpeg" alt="programadores trabajando juntos" />
        </picture>
    </div>
  )
}

export default PhilosophyAndValues