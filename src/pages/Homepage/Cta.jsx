
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const InternshipCTA = () => {
  const navigate = useNavigate();

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
              Build Your Skills with
              <span className="block text-[#63a8f2]">
              Industry-Ready Internship
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl mx-auto text-gray-300 text-lg">
              Join our 3-month internship program to gain hands-on experience
  through live projects, interactive training sessions, expert
  mentorship, and practical learning. Build your resume, strengthen
  your portfolio, and develop the technical skills needed to launch
  your career with confidence.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
  {/* Apply Now Button */}
  <button
    onClick={() => navigate("/internship")}
    className="rounded-full bg-[#63a8f2] px-8 py-3 font-semibold text-[#132948] transition hover:bg-white hover:text-[#132948]"
  >
    Apply Now
  </button>

  {/* Learn More Button */}
  <button
    onClick={() => navigate("/aboutus")}
    className="flex items-center justify-center gap-2 rounded-full border-2 border-[#63a8f2] px-8 py-3 font-semibold text-[#63a8f2] transition hover:bg-[#63a8f2] hover:text-[#132948]"
  >
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
