// import Team1 from "../assets/img/Group 22.png";
// import Team2 from "../assets/img/Group 23.png";
// import Team3 from "../assets/img/Group 24.png";

// function Team() {
//   return (
//     <>
//       <div className="max-w-[1240px] p-2 mx-auto my-20 ">
//         <h1 className="text-4xl md:text-4xl font-bold mb-20">
//           Our Team Provides Valuable Services at <br></br> Any Time in Any
//           Situation
//         </h1>
//         <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
//           <div className="md:w-[325px]">
//             <img className="h-20 w-20 mb-6" src={Team1} alt="" />
//             <h1 className="text-xl font-bold mb-3">Expert Guidance</h1>
//             <p className="text-gray-600 mb-7">
//               Rely on seasoned professionals for tailored financial advice and
//               strategic planning aligned with your unique goals
//             </p>
//             <a href="#" className="text-[#008080] font-medium">
//               Read more
//             </a>
//           </div>
//           <div className="w-[325px]">
//             <img className="h-20 w-20 mb-6" src={Team2} alt="" />
//             <h1 className="text-xl font-bold mb-3">Risk Management</h1>
//             <p className="text-gray-600 mb-7">
//               We expertly handle and proactively mitigate financial risks,
//               ensuring the safeguard of assets and overall stability
//             </p>
//             <a href="#" className="text-[#008080] font-medium">
//               Read more
//             </a>
//           </div>
//           <div className="w-[325px]">
//             <img className="h-20 w-20 mb-6" src={Team3} alt="" />
//             <h1 className="text-xl font-bold mb-3">Customized Solutions</h1>
//             <p className="text-gray-600 mb-7">
//               Receive and Benefit from with financial solutions that tailored to
//               your unique financial challenges and aspirations
//             </p>
//             <a href="#" className="text-[#008080] font-medium">
//               Read more
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Team;

import Team1 from "../assets/img/Group 22.png";
import Team2 from "../assets/img/Group 23.png";
import Team3 from "../assets/img/Group 24.png";

function Team() {
  return (
    <>
      <div className="max-w-[1240px] p-2 mx-auto my-20 ">
        <h1 className="text-[29px] md:text-4xl font-bold mb-8 md:mb-20">
          Our Team Provides Valuable Services at <br className="md:none"></br>
          Any Time in Any Situation
        </h1>
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-full md:w-[325px]">
            <img className="h-20 w-20 mb-6" src={Team1} alt="" />
            <h1 className="text-xl font-bold mb-3">Expert Guidance</h1>
            <p className="text-gray-600 mb-7">
              Rely on seasoned professionals for tailored financial advice and
              strategic planning aligned with your unique goals
            </p>
            <a href="#" className="text-[#008080] font-medium">
              Read more
            </a>
          </div>
          <div className="w-full md:w-[325px]">
            <img className="h-20 w-20 mb-6" src={Team2} alt="" />
            <h1 className="text-xl font-bold mb-3">Risk Management</h1>
            <p className="text-gray-600 mb-7">
              We expertly handle and proactively mitigate financial risks,
              ensuring the safeguard of assets and overall stability
            </p>
            <a href="#" className="text-[#008080] font-medium">
              Read more
            </a>
          </div>
          <div className="w-full md:w-[325px]">
            <img className="h-20 w-20 mb-6" src={Team3} alt="" />
            <h1 className="text-xl font-bold mb-3">Customized Solutions</h1>
            <p className="text-gray-600 mb-7">
              Receive and Benefit from with financial solutions that tailored to
              your unique financial challenges and aspirations
            </p>
            <a href="#" className="text-[#008080] font-medium">
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
