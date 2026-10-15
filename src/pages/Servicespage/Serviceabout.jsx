
import React from "react";
import {
  FiSmartphone,
  FiGlobe,
  FiPenTool,
  FiArrowRight,
} from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

const services = [
  {
    icon: <FiPenTool />,
    title: "Internship Program",
    desc: "Logo, Banner, Social Media & Branding Design.",
  },
  {
    icon: <FiSmartphone />,
    title: "Software Development",
    desc: "Android & iOS applications with beautiful UI and performance.",
  },
  {
    icon: <FiGlobe />,
    title: "Website Development",
    desc: "Modern responsive websites using React, Tailwind and Bootstrap.",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white overflow-hidden">

{/* Hero Section */}
<section className="bg-[#132948] text-white py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-[#63a8f2] text-sm font-semibold mb-3">
      WHAT WE DO
    </p>

    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      Our Services
      <span className="text-[#63a8f2]"> Built for Your Success</span>
    </h1>

    <p className="text-gray-300 text-sm md:text-base max-w-2xl leading-7">
      We build modern websites, mobile apps and business software
      that help businesses grow and succeed.
    </p>

    <a
      href="#services"
      className="mt-6 inline-block bg-[#63a8f2] text-[#132948] px-5 py-3 rounded-md font-semibold text-sm hover:bg-white transition-colors duration-300"
    >
      Explore Services →
    </a>

  </div>
</section>

{/* Hero Section */}
{/* <section className="relative overflow-hidden bg-gradient-to-r from-[#132948] via-[#1c416d] to-[#63a8f2] text-white py-16 md:py-20">

  <div className="absolute  top-0 right-0 w-64 h-64 bg-[#63a8f2]/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
      <span className="w-2 h-2 bg-[#63a8f2] rounded-full"></span>
      WHAT WE DO
    </span>

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
      Our Services
      <span className="block text-[#b8dcff] mt-1">
        Built for Your Success
      </span>
    </h1>

    <p className="text-blue-100 text-sm md:text-base max-w-xl leading-7">
      We build modern websites, mobile apps and business software
      that help companies grow faster.
    </p>

    <a
      href="#services"
      className="mt-6 inline-flex items-center gap-2 bg-[#63a8f2] hover:bg-white text-[#132948] px-5 py-3 rounded-lg text-sm font-bold transition-all duration-300 hover:-translate-y-1 shadow-lg"
    >
      Explore Services
      <FiArrowRight />
    </a>

  </div>
</section> */}


      {/* Services Section */}
     {/* Services Section */}
<section id="services" className="relative overflow-hidden bg-[#f4f8fd] py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="inline-block text-[#397fc4] bg-[#63a8f2]/15 px-5 py-2 rounded-full text-sm font-bold mb-4">
        OUR EXPERTISE
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold text-[#132948] mb-5">
        What We Offer
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-7">
        Explore our web development, business software solutions,
        and industry-focused internship programs.
      </p>
    </div>

    {/* Services Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Website Development */}
      <div className="group relative bg-white p-8 md:p-9 rounded-3xl border border-[#dce9f8] shadow-sm hover:shadow-xl hover:shadow-[#132948]/10 hover:-translate-y-2 hover:border-[#63a8f2] transition-all duration-300 overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#132948] to-[#63a8f2] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        <div className="w-16 h-16 bg-gradient-to-br from-[#132948] to-[#397fc4] rounded-2xl flex items-center justify-center text-white text-3xl mb-7 shadow-lg shadow-[#132948]/20 group-hover:scale-110 transition-transform duration-300">
          <i className="fas fa-globe"></i>
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#63a8f2]">
          Web Development
        </span>

        <h3 className="text-xl md:text-2xl font-bold text-[#132948] mt-3 mb-4 group-hover:text-[#397fc4] transition-colors">
          Website Development
        </h3>

        <p className="text-gray-600 leading-7 min-h-[84px]">
          We create modern, responsive, and user-friendly websites
          tailored to your business needs and brand identity.
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {["Business Websites", "Responsive Design", "Custom Websites"].map((item) => (
            <span key={item} className="text-xs font-semibold text-[#132948] bg-[#f0f6fd] border border-[#dce9f8] px-3 py-2 rounded-lg">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CRM Software */}
      <div className="group relative bg-white p-8 md:p-9 rounded-3xl border border-[#dce9f8] shadow-sm hover:shadow-xl hover:shadow-[#132948]/10 hover:-translate-y-2 hover:border-[#63a8f2] transition-all duration-300 overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#132948] to-[#63a8f2] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        <div className="w-16 h-16 bg-gradient-to-br from-[#132948] to-[#397fc4] rounded-2xl flex items-center justify-center text-white text-3xl mb-7 shadow-lg shadow-[#132948]/20 group-hover:scale-110 transition-transform duration-300">
          <i className="fas fa-laptop-code"></i>
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#63a8f2]">
        Software Development
        </span>

        <h3 className="text-xl md:text-2xl font-bold text-[#132948] mt-3 mb-4 group-hover:text-[#397fc4] transition-colors">
        Software Development
        </h3>

        <p className="text-gray-600 leading-7 min-h-[84px]">
              We develop custom software, web applications, and scalable
    business solutions to streamline operations, improve efficiency,
    and accelerate business growth using modern technologies.
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {[ "Custom Software",
      "Web Applications",
      "Scalable Solutions",].map((item) => (
            <span key={item} className="text-xs font-semibold text-[#132948] bg-[#f0f6fd] border border-[#dce9f8] px-3 py-2 rounded-lg">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Internship */}
      <div className="group relative bg-white p-8 md:p-9 rounded-3xl border border-[#dce9f8] shadow-sm hover:shadow-xl hover:shadow-[#132948]/10 hover:-translate-y-2 hover:border-[#63a8f2] transition-all duration-300 overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#132948] to-[#63a8f2] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        <div className="w-16 h-16 bg-gradient-to-br from-[#132948] to-[#397fc4] rounded-2xl flex items-center justify-center text-white text-3xl mb-7 shadow-lg shadow-[#132948]/20 group-hover:scale-110 transition-transform duration-300">
          <i className="fas fa-graduation-cap"></i>
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#63a8f2]">
          Learn & Grow
        </span>

        <h3 className="text-xl md:text-2xl font-bold text-[#132948] mt-3 mb-4 group-hover:text-[#397fc4] transition-colors">
          Internship Programs
        </h3>

        <p className="text-gray-600 leading-7 min-h-[84px]">
          Build practical coding skills through structured training,
          live sessions, hands-on projects, and industry-oriented
          development experience.
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {["Java", "Hibernate", "PHP", "Laravel", "CodeIgniter"].map((item) => (
            <span key={item} className="text-xs font-semibold text-[#132948] bg-[#f0f6fd] border border-[#dce9f8] px-3 py-2 rounded-lg">
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

      {/* CTA Section */}

{/* CTA Section */}
<section id="contact" className="bg-white py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#132948] via-[#1b416b] to-[#63a8f2] px-6 py-12 md:px-12 md:py-16 text-center shadow-xl">

      {/* Decorative Circles */}
      <div className="absolute -top-20 -right-16 w-56 h-56 rounded-full border-[30px] border-white/10"></div>
      <div className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-[#63a8f2]/20 blur-2xl"></div>

      <div className="relative z-10">

        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#b8dcff] px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
          <FiCheckCircle />
          LET'S BUILD SOMETHING GREAT
        </span>

        <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
          Transform Your Ideas Into Powerful
          <span className="block text-[#b8dcff] mt-2">
           Digital Solutions
          </span>
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-blue-100 text-sm md:text-base leading-7">
          We create modern websites, custom software, mobile applications,
          and internship programs that help businesses and students
          achieve success.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-[#63a8f2] hover:bg-white text-[#132948] px-6 py-3 rounded-xl text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Start Your Project
            <FiArrowRight />
          </a>

          <a
            href="mailto:info@example.com"
            className="inline-flex items-center gap-2 border border-white/50 bg-white/10 hover:bg-white hover:text-[#132948] text-white px-6 py-3 rounded-xl text-sm font-bold backdrop-blur-sm transition-all duration-300"
          >
            Contact Us
            <FiArrowRight />
          </a>

        </div>

      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default ServicesPage;
