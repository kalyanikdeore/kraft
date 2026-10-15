
// import React from "react";

// const Internship = () => {
//   const benefits = [
//     "3 Months Internship",
//     "Hands-on Live Projects",
//     "Internship Completion Certificate",
//     "Resume & Portfolio Building",
//     "Live sessions",
//   ];

//   return (
//     <section className="relative bg-white py-7 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-white border border-[#63a8f2]/30 rounded-3xl p-8 md:p-14 shadow-xl">

//           {/* Badge */}
//           <span className="inline-block bg-[#132948] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
//             🚀 3-Month Internship Program
//           </span>

//           {/* Heading */}
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#132948] mt-6 leading-tight max-w-4xl">
//             Kickstart Your Career with Our
//             <span className="text-[#63a8f2]">
//               {" "}3-Month Internship
//             </span>
//           </h2>

//           {/* Description */}
//           <p className="text-gray-600 mt-6 text-lg leading-8 max-w-4xl">
//             Our 3-month internship program is designed to bridge the gap
//             between academic learning and industry requirements. Work on
//             real-world projects, gain practical experience, receive guidance
//             from experienced mentors, and build the technical and professional
//             skills needed to start your career with confidence.
//           </p>

//           {/* Benefits */}
//           <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
//             {benefits.map((item, index) => (
//               <div
//                 key={index}
//                 className="group bg-white border border-[#63a8f2]/30 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-[#132948] hover:-translate-y-2 transition-all duration-300"
//               >
//                 <div className="w-14 h-14 rounded-full bg-[#63a8f2] flex items-center justify-center text-[#132948] text-xl font-bold shadow-md group-hover:scale-110 transition">
//                   ✓
//                 </div>

//                 <h4 className="text-[#132948] text-lg font-semibold mt-5 leading-7">
//                   {item}
//                 </h4>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Internship;

import React from "react";

const Internship = () => {
  const benefits = [
    "3 Months Internship",
    "Hands-on Live Projects",
    "Internship Completion Certificate",
    "Resume & Portfolio Building",
    "Live sessions",
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-[#63a8f2]/30 bg-white p-8 text-center shadow-xl md:p-14">

          {/* Badge */}
          <span className="inline-block rounded-full bg-[#132948] px-3 py-2 text-sm font-semibold text-white shadow-md">
            🚀 3-Month Internship Program
          </span>

          {/* Heading */}
          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold leading-tight text-[#132948] md:text-3xl lg:text-4xl">
            Kickstart Your Career with Our{" "}
            <span className="text-[#63a8f2]">
              3-Month Internship
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-5xl text-base leading-8 text-gray-600 md:text-lg">
            Our 3-month internship program is designed to bridge the gap
            between academic learning and industry requirements. Work on
            real-world projects, gain practical experience, receive guidance
            from experienced mentors, and build the technical and professional
            skills needed to start your career with confidence.
          </p>

          {/* Benefits */}
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="group rounded-1xl border border-[#63a8f2]/30 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#132948] hover:shadow-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#63a8f2] text-xl font-bold text-[#132948] shadow-md transition group-hover:scale-110">
                  ✓
                </div>

                <h4 className="mt-5 text-lg font-semibold leading-7 text-[#132948]">
                  {item}
                </h4>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Internship;

