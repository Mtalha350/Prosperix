import Expert from "../assets/img/Expertise-img.png";

function Expertise() {
  return (
    <>
      <div className="max-w-[1240px] p-2 my-10 md:grid grid-cols-2 gap-8">
        <div className="md:col-span-1 flex flex-col justify-center ">
          <h1 className="text-base rounded font-semibold text-[#008080] bg-[#E0F8F8] uppercase w-[7.7rem] px-1 mb-5">
            Our Expertise
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-12">
            Transforming Finances With Strategic Wealth Management
          </h1>
          <p className="mb-3">
            Guiding You on Your Global Financial Success Journey Through
            Customized & Personalized Financial Consulting Services. Achieve
            Your Goals with Data-Driven Expertise and Secure Your Financial
            Future, Successfully Navigating the Ever-Changing Finance
          </p>
          <p className="mb-6 md:mb-12">
            We're Committed to Providing You with Expert Guidance, Proven
            Strategies & Personalized Approach to Ensure Financial Prosperity
          </p>
          <div className="flex flex-col md:flex-row items-stretch">
            <button
              type="submit"
              className="border-2 border-[#D5DDDD] font-medium rounded-sm text-sm md:text-base w-full md:w-auto px-5 py-2.5 md:py-3 text-center"
            >
              Explore Services
            </button>
          </div>
        </div>
        <div className="md:col-span-1 flex flex-col justify-center ">
          <img
            className="h-[20rem] md:h-[32rem] max-w-full"
            src={Expert}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Expertise;
