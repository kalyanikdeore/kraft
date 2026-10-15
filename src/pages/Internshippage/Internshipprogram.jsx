
import React from "react";
import { FiArrowRight, FiCode, FiGlobe, FiLayers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function InternshipPrograms() {
  const navigate = useNavigate();

  const programs = [
    {
      title: "Full Stack Development - Java",
      desc: "Learn Core Java, Spring Boot, and Hibernate with real-world projects.",
      icon: <FiCode />,
    },
    {
      title: "Full Stack Development - PHP",
      desc: "Learn PHP, Laravel Framework, and MySQL with real-world projects.",
      icon: <FiLayers />,
    },
    {
      title: "Web Development",
      desc: "Become proficient in React.js for building scalable web applications.",
      icon: <FiGlobe />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f3f8ff] py-16 md:py-24">

      {/* Background Decoration */}
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#63a8f2]/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#132948]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#63a8f2]/40 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#397fc4] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#63a8f2]" />
            Learn • Build • Grow
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-4xl font-extrabold text-[#132948]">
            Our Internship Programs
          
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#132948] to-[#63a8f2]" />

          <p className="text-gray-600 mt-5 text-sm md:text-base leading-7 max-w-2xl mx-auto">
            Choose from industry-aligned programs designed to make you job-ready.
          </p>

        </div>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">

          {programs.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#dce9f8] bg-white p-7 md:p-8 shadow-sm hover:shadow-2xl hover:shadow-[#132948]/10 hover:-translate-y-2 hover:border-[#63a8f2] transition-all duration-300"
            >

              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#132948] to-[#63a8f2] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#132948] to-[#397fc4] text-2xl text-white shadow-lg shadow-[#132948]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {item.icon}
                </div>

                <span className="text-sm font-bold text-[#63a8f2] bg-[#63a8f2]/10 px-3 py-1.5 rounded-full">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#132948] mb-4 group-hover:text-[#397fc4] transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-7 mb-7 flex-grow">
                {item.desc}
              </p>

              {/* Apply Button */}
              <button
                onClick={() =>
                  navigate("/apply", {
                    state: {
                      course: item.title,
                    },
                  })
                }
                className="w-full bg-[#132948] text-white py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm hover:bg-[#63a8f2] hover:text-[#132948] shadow-md hover:shadow-lg transition-all duration-300 group/btn"
              >
                Apply Now
                <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>

            </div>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Start learning today and take the next step in your career.
          </p>
        </div>

      </div>
    </section>
  );
}
