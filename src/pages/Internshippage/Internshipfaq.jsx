
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "Full Stack Development using Java",
    answer:
      "Master Java, Spring Boot, Hibernate, React.js, REST APIs, MySQL, Microservices, and build enterprise-level applications.",
  },
  {
    question: "Web Development",
    answer:
      "Learn HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, Node.js, Express.js, MongoDB and build responsive websites.",
  },
  {
    question: "UI/UX Design",
    answer:
      "Learn Figma, Wireframing, Prototyping, User Research, Responsive Design, Design Systems and UI best practices.",
  },
];

export default function InternshipFAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#132948] py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}
        <h2 className="text-center text-5xl font-extrabold text-[#63a8f2] uppercase mb-14">
          Internship
        </h2>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className={`w-full flex justify-between items-center px-6 py-5 text-left duration-300 ${
                  active === index
                    ? "bg-[#63a8f2]/15"
                    : "hover:bg-[#63a8f2]/10"
                }`}
              >
                <span className="font-semibold text-[#132948] text-lg">
                  {item.question}
                </span>

                {active === index ? (
                  <FiChevronUp
                    size={22}
                    className="text-[#132948]"
                  />
                ) : (
                  <FiChevronDown
                    size={22}
                    className="text-[#63a8f2]"
                  />
                )}
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  active === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-8">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
