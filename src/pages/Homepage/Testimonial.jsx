import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amit Pagar",
      role: "React Developer Intern",
      review:
        "Working on live projects helped me improve my React skills and gain real industry experience. The mentors were always supportive.",
    },
    {
      name: "Nitya Bhamre",
      role: "Frontend Developer Intern",
      review:
        "This internship gave me practical knowledge and confidence. I learned modern web development through real-time projects.",
    },
    {
      name: "Yug Wagh",
      role: "Full Stack Developer Intern",
      review:
        "The best part was working on live client projects. I improved my coding, debugging, and teamwork skills throughout the internship.",
    },
    {
      name: "Anushka Nikam",
      role: "Web Development Intern",
      review:
        "An amazing learning experience with excellent guidance. It helped me build my portfolio and prepare for technical interviews.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold">
            ⭐ Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5">
            What Our <span className="text-orange-500">Interns Say</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Hear from our interns who gained practical experience, worked on
            live projects, and started their careers with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-5">
                <FaQuoteLeft className="text-orange-500 text-lg" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-orange-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm leading-7 mb-6">
                "{item.review}"
              </p>

              {/* User */}
              <div className="border-t pt-4">
                <h4 className="font-bold text-lg text-gray-900">
                  {item.name}
                </h4>
                <p className="text-orange-500 text-sm font-medium">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;