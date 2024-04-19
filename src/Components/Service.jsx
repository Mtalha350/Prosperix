import service from "../assets/img/Service-img.png";
import Dollar from "../assets/img/Group 83.png";
import Investment from "../assets/img/Group 84.png";
import Estate from "../assets/img/Group 86.png";
import Wealth from "../assets/img/Group 85.png";

function Service() {
  return (
    <>
      <div className="max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2 gap-8">
        <div className="md:col-span-1 flex flex-col justify-center md:mx-5">
          <img
            className="h-[20rem] md:h-[32rem] max-w-full"
            src={service}
            alt=""
          />
        </div>
        <div className="md:col-span-1 flex flex-col justify-center md:mx-5">
          <h1 className="text-base rounded font-semibold text-[#008080] bg-[#E0F8F8] uppercase w-[7.7rem] px-1 mb-5">
            Our Services
          </h1>
          <h1 className="text-4xl md:text-[2.8rem] font-bold mb-6 md:mb-12">
            Our Services Can Help You Grow Your Investments and Wealth
          </h1>
          <p className="mb-8">
            Embark on a Journey to Unlock a World of Financial Opportunities,
            Grow Your Investment with Our Comprehensive and Expert Services
          </p>
          {/* <div className="flex flex-wrap gap-4 md:gap-8 mb-8 font-semibold ">
            <div>
              <img className="inline h-10 w-10" src={Dollar} alt="" />
              <span className="ml-2">Financial Planning</span>
            </div>
            <div>
              <img className="inline h-10 w-10" src={Estate} alt="" />
              <span className="ml-2">Estate Planning</span>
            </div>
            <div>
              <img className="inline h-10 w-10" src={Investment} alt="" />
              <span className="ml-4">Investment Advisory</span>
            </div>
            <div>
              <img className="inline h-10 w-10" src={Wealth} alt="" />
              <span className="ml-2">Wealth Management</span>
            </div>
          </div> */}
          <div className="flex flex-wrap gap-4 md:gap-8 mb-8 font-semibold">
            <div>
              <ul>
                <li className="mb-8 ">
                  {" "}
                  <img className="inline h-10 w-10 " src={Dollar} alt="" />{" "}
                  Financial Planning
                </li>
                <li className="mb-8 ">
                  {" "}
                  <img className="inline h-10 w-10 " src={Estate} alt="" />{" "}
                  Estate Planning
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="mb-8 ">
                  {" "}
                  <img
                    className="inline h-10 w-10 "
                    src={Investment}
                    alt=""
                  />{" "}
                  Investment Advisory
                </li>
                <li className="mb-8 ">
                  {" "}
                  <img className="inline h-10 w-10 " src={Wealth} alt="" />{" "}
                  Wealth Management
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-stretch">
            <button
              type="submit"
              className="border-2 border-[#D5DDDD] font-medium rounded-sm text-sm md:text-base w-full md:w-auto px-5 py-2.5 md:py-3 text-center"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
