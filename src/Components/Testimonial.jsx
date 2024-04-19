import client1 from "../assets/img/client 1.png";
import client2 from "../assets/img/client 2.png";
import client3 from "../assets/img/client 3.png";
import Qotation1 from "../assets/img/qotation1-img.png";
import Qotation2 from "../assets/img/qotation2-img.png";

function CustomerCards() {
  return (
    <>
      <div className="max-w-[1240px] p-2 my-10 ">
        <div className="md:col-span-1 flex flex-col justify-center ">
          <h1 className="text-base rounded font-semibold text-[#008080] bg-[#E0F8F8] uppercase w-[7.7rem] px-1 mb-5">
            testimonials
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
            What Our Customers Say
          </h1>

          <p className="mb-12">
            Discover the Success Stories and Satisfaction of Clients Who Have{" "}
            <br></br>
            Benefited from Our Expertise and Personalized Financial Guidance
          </p>
        </div>
        {/* <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-tl-[20px] rounded-br-[20px] p-4 md:w-64 border-2 border-solid border-gray-300">
            <div className="flex mb-4">
              <img
                src={client1} // Replace with the correct image source
                alt="Customer Image"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">Alex Walker</h2>
                <p className="text-gray-600 mr-auto">Attorney</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Estate planning is crucial, and they made the process seamless and
              stress-free. I can rest assured knowing family's future is secure
            </p>
            <img src={Qotation1} className="ml-auto" />
          </div>
          <div className="bg-[#008080] text-white shadow-md rounded-tl-[20px] rounded-br-[20px] p-4 md:w-64 border-2 border-solid border-[#008080] ">
            <div className="flex mb-4">
              <img
                src={client2} // Replace with the correct image source
                alt="Customer Image"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">Alex Walker</h2>
                <p className=" mr-auto">Attorney</p>
              </div>
            </div>
            <p className=" mb-6">
              Estate planning is crucial, and they made the process seamless and
              stress-free. I can rest assured knowing family's future is secure
            </p>
            <img src={Qotation2} className="ml-auto" />
          </div>
          <div className="bg-white shadow-md rounded-tl-[20px] rounded-br-[20px] p-4 md:w-64 border-2 border-solid border-gray-300">
            <div className="flex mb-4">
              <img
                src={client3} // Replace with the correct image source
                alt="Customer Image"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">Alex Walker</h2>
                <p className="text-gray-600 mr-auto">Attorney</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Estate planning is crucial, and they made the process seamless and
              stress-free. I can rest assured knowing family's future is secure
            </p>
            <img src={Qotation1} className="ml-auto" />
          </div>
        </div> */}
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-tl-[20px] rounded-br-[20px] p-4 md:w-64 border-2 border-solid border-gray-300">
            <div className="flex mb-4">
              <img
                src={client1} // Replace with the correct image source
                alt="Customer Image"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">Alex Walker</h2>
                <p className="text-gray-600 mr-auto">Attorney</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Estate planning is crucial, and they made the process seamless and
              stress-free. I can rest assured knowing family's future is secure
            </p>
            <img src={Qotation1} className="ml-auto" alt="Quotation" />
          </div>
          <div className="bg-[#008080] text-white shadow-md rounded-tl-[20px] rounded-br-[20px] p-4 md:w-64 border-2 border-solid border-[#008080] ">
            <div className="flex mb-4">
              <img
                src={client2} // Replace with the correct image source
                alt="Customer Image"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">Alex Walker</h2>
                <p className=" mr-auto">Attorney</p>
              </div>
            </div>
            <p className=" mb-6">
              Estate planning is crucial, and they made the process seamless and
              stress-free. I can rest assured knowing family's future is secure
            </p>
            <img src={Qotation2} className="ml-auto" alt="Quotation" />
          </div>
          <div className="bg-white shadow-md rounded-tl-[20px] rounded-br-[20px] p-4 md:w-64 border-2 border-solid border-gray-300">
            <div className="flex mb-4">
              <img
                src={client3} // Replace with the correct image source
                alt="Customer Image"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">Alex Walker</h2>
                <p className="text-gray-600 mr-auto">Attorney</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Estate planning is crucial, and they made the process seamless and
              stress-free. I can rest assured knowing family's future is secure
            </p>
            <img src={Qotation1} className="ml-auto" alt="Quotation" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerCards;

// import client1 from "../assets/img/client 1.png";
// import client2 from "../assets/img/client 2.png";
// import client3 from "../assets/img/client 3.png";
// import Qotation1 from "../assets/img/qotation1-img.png";
// import Qotation2 from "../assets/img/qotation2-img.png";

// function CustomerCards() {
//   return (
//     <>
//       <div className="max-w-[1240px] p-2 my-10 mx-auto">
//         <div className="md:col-span-1 flex flex-col justify-center ">
//           <h1 className="text-base rounded font-semibold text-[#008080] bg-[#E0F8F8] uppercase w-[7.7rem] px-1 mb-5">
//             testimonials
//           </h1>
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
//             What Our Customers Say
//           </h1>

//           <p className="mb-12">
//             Discover the Success Stories and Satisfaction of Clients Who Have{" "}
//             <br className="md:hidden"></br>
//             Benefited from Our Expertise and Personalized Financial Guidance
//           </p>
//         </div>

//         <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white shadow-md rounded-tl-[20px] rounded-br-[20px] p-4 border-2 border-solid border-gray-300">
//             <div className="flex mb-4">
//               <img
//                 src={client1} // Replace with the correct image source
//                 alt="Customer Image"
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <div>
//                 <h2 className="text-xl font-semibold">Alex Walker</h2>
//                 <p className="text-gray-600 mr-auto">Attorney</p>
//               </div>
//             </div>
//             <p className="text-gray-600 mb-6">
//               Estate planning is crucial, and they made the process seamless and
//               stress-free. I can rest assured knowing family's future is secure
//             </p>
//             <img src={Qotation1} className="ml-auto" />
//           </div>
//           <div className="bg-[#008080] text-white shadow-md rounded-tl-[20px] rounded-br-[20px] p-4 border-2 border-solid border-[#008080] ">
//             <div className="flex mb-4">
//               <img
//                 src={client2} // Replace with the correct image source
//                 alt="Customer Image"
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <div>
//                 <h2 className="text-xl font-semibold">Alex Walker</h2>
//                 <p className=" mr-auto">Attorney</p>
//               </div>
//             </div>
//             <p className=" mb-6">
//               Estate planning is crucial, and they made the process seamless and
//               stress-free. I can rest assured knowing family's future is secure
//             </p>
//             <img src={Qotation2} className="ml-auto" />
//           </div>
//           <div className="bg-white shadow-md rounded-tl-[20px] rounded-br-[20px] p-4 border-2 border-solid border-gray-300">
//             <div className="flex mb-4">
//               <img
//                 src={client3} // Replace with the correct image source
//                 alt="Customer Image"
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <div>
//                 <h2 className="text-xl font-semibold">Alex Walker</h2>
//                 <p className="text-gray-600 mr-auto">Attorney</p>
//               </div>
//             </div>
//             <p className="text-gray-600 mb-6">
//               Estate planning is crucial, and they made the process seamless and
//               stress-free. I can rest assured knowing family's future is secure
//             </p>
//             <img src={Qotation1} className="ml-auto" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CustomerCards;
