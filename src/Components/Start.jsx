import Starts from "../assets/img/Start-img.png";

function Start() {
  return (
    <>
      <div className="bg-[#008080] max-w-[1240px] p-12 my-10 md:grid grid-cols-2 gap-8 rounded-tl-[50px] rounded-br-[50px]">
        <div className="md:col-span-1 flex flex-col justify-center">
          <h1 className="text-base rounded font-semibold text-[#2CDFD5] uppercase w-[7.7rem] px-1 mb-5">
            Start now
          </h1>
          <h1 className="text-4xl md:text-5xl text-white font-semibold mb-6 md:mb-12">
            Get Start For Free No Credit Card Required
          </h1>

          <div className="flex flex-col md:flex-row items-stretch w-full mb-6">
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              className="bg-white border border-gray-300 text-gray-900 mb-2 md:mb-0 md:me-4 text-sm md:text-base block w-full md:w-auto p-2.5"
              required
            />
            <button
              type="submit"
              className="text-white bg-[#20CFC6] font-medium rounded-sm text-sm md:text-base w-full md:w-auto px-5 py-2.5 md:py-3 text-center "
            >
              Get Started
            </button>
          </div>
          <p className="text-white inline">
            Want to contact our team and book a call?
            <a href="" className="text-[#20CFC6]">
              Try it now
            </a>
          </p>
        </div>
        <div className="md:col-span-1 flex flex-col justify-center">
          <img
            className="h-[20rem] md:h-[32rem] max-w-full"
            src={Starts}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Start;
