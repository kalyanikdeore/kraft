
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const InternshipCTA = () => {
  return (
    <section className="mb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[30px] bg-[#132948] shadow-xl">

          {/* Background Blur */}
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#63a8f2]/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#63a8f2]/20 blur-3xl"></div>

          <div className="relative z-10 text-center px-8 md:px-16 py-5">

            {/* Badge */}
            <span className="inline-block rounded-full bg-[#63a8f2]/20 px-5 py-2 text-sm font-semibold text-[#63a8f2]">
              INTERNSHIP PROGRAM
            </span>

            {/* Heading */}
            <h2 className="mt-5 text-4xl md:text-4xl font-bold text-white leading-tight">
              Launch Your Career with
              <span className="block text-[#63a8f2]">
                Real-World Experience
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl mx-auto text-gray-300 text-lg">
              Work on live projects, learn from Mentors, and gain the
              practical skills needed to start your career in software
              development.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

              <button className="rounded-full bg-[#63a8f2] px-8 py-3 font-semibold text-[#132948] transition hover:bg-white hover:text-[#132948]">
                Apply Now
              </button>

              <button className="flex items-center justify-center gap-2 rounded-full border-2 border-[#63a8f2] px-8 py-3 font-semibold text-[#63a8f2] transition hover:bg-[#63a8f2] hover:text-[#132948]">
                Learn More
                <FiArrowRight />
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipCTA;
