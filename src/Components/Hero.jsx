import heros from "../assets/img/hero-img.png";

function Hero() {
  return (
    <>
      <div className="max-w-[1240px] p-2 my-10 md:grid grid-cols-2 gap-8">
        <div className="md:col-span-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-semibold mt-8 mb-6 md:mb-12">
            Navigating the <span className="text-[#008080]">Global</span>{" "}
            financial landscape
          </h1>
          <p className="mb-6 md:mb-12">
            Empowering Your Journey to Global Financial Success Through
            Customized and Personalized Financial Consulting for Every Client
          </p>
          <div className="flex flex-col md:flex-row items-stretch w-full">
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              className="bg-white border border-gray-300 text-gray-900 mb-2 md:mb-0 md:me-4 text-sm md:text-base block w-full md:w-auto p-2.5"
              required
            />
            <button
              type="submit"
              className="text-white bg-[#008080] hover:bg-white hover:text-[#008080] hover:border-2 border-[#008080] font-medium rounded-sm text-sm md:text-base w-full md:w-auto px-5 py-2.5 md:py-3 text-center"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="md:col-span-1 flex flex-col justify-center">
          <img
            className="h-[20rem] mt-6 md:h-[32rem] max-w-full"
            src={heros}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
