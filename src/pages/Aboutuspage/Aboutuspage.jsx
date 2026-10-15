
import React from "react";
import {
  FiCode,
  FiAward,
  FiCheckCircle,
  FiPhone,
  FiArrowRight,
  FiMessageCircle,
  FiTarget,
  FiEye,
  FiUsers,
} from "react-icons/fi";

const AboutPage = () => {
  return (
    <div className="bg-white overflow-hidden">

      {/* Hero Section */}
     <section className="bg-[#132948] text-white py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-[#63a8f2] text-sm font-semibold mb-3">
    GET TO KNOW US
    </p>

    <h1 className="text-3xl md:text-4xl font-bold mb-4">
  About 
      <span className="text-[#63a8f2]"> Our Company </span>
    </h1>

    <p className="text-gray-300 text-sm md:text-base max-w-2xl leading-7">
     We build websites, mobile apps and provide industry-oriented internships that help students become job-ready developers.
    </p>

    {/* <a
      href="#services"
      className="mt-6 inline-block bg-[#63a8f2] text-[#132948] px-5 py-3 rounded-md font-semibold text-sm hover:bg-white transition-colors duration-300"
    >
     Discover More →
    </a> */}

  </div>
</section>

      {/* About Company */}
      <section id="about-company" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div>
              <span className="inline-block rounded-full bg-[#63a8f2]/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#397fc4]">
                Our Services
              </span>

              <h2 className="text-3xl md:text-3xl font-extrabold text-[#132948] mt-4">
                What We Do
              </h2>

              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#132948] to-[#63a8f2]" />

              <p className="mt-6 text-gray-600 leading-8">
                We help startups, businesses, and students by delivering innovative
                software solutions and industry-focused internship programs that
                prepare future professionals.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                <div className="group bg-[#f3f8ff] rounded-2xl p-5 border border-[#dceaff] hover:border-[#63a8f2] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#132948] text-white text-xl mb-4 group-hover:bg-[#63a8f2] group-hover:text-[#132948] transition">
                    <FiCode />
                  </div>
                  <h4 className="font-bold text-base text-[#132948]">
                    Website Development
                  </h4>
                  <p className="text-gray-600 text-sm mt-2 leading-6">
                    Responsive business websites with modern technologies.
                  </p>
                </div>

                <div className="group bg-[#f3f8ff] rounded-2xl p-5 border border-[#dceaff] hover:border-[#63a8f2] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#132948] text-white text-xl mb-4 group-hover:bg-[#63a8f2] group-hover:text-[#132948] transition">
                    <FiTarget />
                  </div>
                  <h4 className="font-bold text-base text-[#132948]">
                    Java Developer
                  </h4>
                  <p className="text-gray-600 text-sm mt-2 leading-6">
                    Live projects, java and internship certificates.
                  </p>
                </div>

                <div className="group bg-[#f3f8ff] rounded-2xl p-5 border border-[#dceaff] hover:border-[#63a8f2] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 sm:col-span-2">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#132948] text-white text-xl mb-4 group-hover:bg-[#63a8f2] group-hover:text-[#132948] transition">
                    <FiUsers />
                  </div>
                  <h4 className="font-bold text-base text-[#132948]">
                    Internship Program
                  </h4>
                  <p className="text-gray-600 text-sm mt-2 leading-6">
                    Live projects, mentorship and internship certificates.
                  </p>
                </div>

              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#132948] to-[#63a8f2] opacity-20 blur-md" />

              <div className="relative rounded-3xl p-2 bg-gradient-to-br from-[#132948] to-[#63a8f2] shadow-2xl">
                <img
                  src="https://media.istockphoto.com/photos/closeup-focus-on-persons-hands-typing-on-the-desktop-computer-backlit-picture-id1356364287?b=1&k=20&m=1356364287&s=170667a&w=0&h=tUdqxKA9YwL4M57YRZzP1GTEpXcUm5-onFeQnsMg10A="
                  alt="Our Services"
                  className="rounded-2xl w-full h-[320px] md:h-[450px] object-cover"
                />
              </div>

              <div className="absolute -bottom-5 left-5 md:left-8 rounded-2xl bg-white p-4 md:p-5 shadow-xl border border-[#dceaff]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#63a8f2]/20 flex items-center justify-center text-[#132948] text-xl">
                    <FiCheckCircle />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#132948]">
                      Learn & Grow
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Skills for your future
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#f3f8ff] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-16 md:space-y-24">

          {/* Vision */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#132948] to-[#63a8f2] opacity-20 blur-sm" />
              <img
                src="https://t3.ftcdn.net/jpg/04/18/52/88/360_F_418528804_xgyFvVsMSHeWk1UgDtR9aoccqSC7BrHy.jpg"
                alt="Vision"
                className="relative rounded-2xl w-full h-[280px] md:h-[340px] object-cover shadow-xl transition duration-500 group-hover:scale-[1.01]"
              />
            </div>

            <div>
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#397fc4]">
                <FiEye /> Our Goal
              </span>

              <h2 className="text-3xl md:text-3xl font-extrabold text-[#132948] mt-4 mb-5">
                Our Vision
              </h2>

              <div className="h-1 w-16 rounded-full bg-[#63a8f2]" />

              <p className="text-gray-600 leading-8 text-base md:text-lg mt-6">
                To become a trusted technology partner by delivering innovative,
                scalable, and future-ready digital solutions that empower businesses
                to grow and succeed.
              </p>

              <div className="flex items-center gap-3 mt-6 text-[#132948] font-semibold text-sm">
                <FiCheckCircle className="text-[#397fc4] text-xl shrink-0" />
                Innovative and future-ready solutions
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="lg:order-1">
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#397fc4]">
                <FiTarget /> Our Purpose
              </span>

              <h2 className="text-3xl md:text-3xl font-extrabold text-[#132948] mt-4 mb-5">
                Our Mission
              </h2>

              <div className="h-1 w-16 rounded-full bg-[#63a8f2]" />

              <p className="text-gray-600 leading-8 text-base md:text-lg mt-6">
                We strive to deliver innovative software solutions while helping
                students and businesses achieve success through technology,
                internships, and digital transformation.
              </p>

              <div className="flex items-center gap-3 mt-6 text-[#132948] font-semibold text-sm">
                <FiCheckCircle className="text-[#397fc4] text-xl shrink-0" />
                Technology, learning and growth
              </div>
            </div>

            <div className="relative group lg:order-2">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#63a8f2] to-[#132948] opacity-20 blur-sm" />
              <img
                src="https://cdn.create.vista.com/api/media/small/320823134/stock-photo-conceptual-hand-writing-showing-our-mission-business-photo-showcasing-a-written-declaration-of-an-organization"
                alt="Mission"
                className="relative rounded-2xl w-full h-[280px] md:h-[340px] object-cover shadow-xl transition duration-500 group-hover:scale-[1.01]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12 md:mb-14">
            <span className="inline-block bg-[#63a8f2]/15 text-[#397fc4] px-4 py-2 rounded-full text-xs font-bold tracking-widest">
              OUR ADVANTAGES
            </span>

            <h2 className="text-3xl md:text-3xl font-extrabold text-[#132948] mt-4">
              Why Choose Us
            </h2>

            <p className="text-gray-600 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-7">
              Practical learning and industry-focused opportunities to help you
              build your skills and grow with confidence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="group rounded-2xl bg-[#f3f8ff] border border-[#dceaff] p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#63a8f2] transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#132948] text-[#b8dcff] text-3xl mb-5 group-hover:bg-[#63a8f2] group-hover:text-[#132948] transition">
                <FiCode />
              </div>
              <h3 className="text-lg font-bold text-[#132948] mb-3">
                Live Projects
              </h3>
              <p className="text-gray-600 text-sm leading-7">
                Gain real industry experience with practical development.
              </p>
            </div>

            <div className="group rounded-2xl bg-[#f3f8ff] border border-[#dceaff] p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#63a8f2] transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#132948] text-[#b8dcff] text-3xl mb-5 group-hover:bg-[#63a8f2] group-hover:text-[#132948] transition">
                <FiAward />
              </div>
              <h3 className="text-lg font-bold text-[#132948] mb-3">
                Certification
              </h3>
              <p className="text-gray-600 text-sm leading-7">
                Receive internship completion certificates.
              </p>
            </div>

            <div className="group rounded-2xl bg-[#f3f8ff] border border-[#dceaff] p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#63a8f2] transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#132948] text-[#b8dcff] text-3xl mb-5 group-hover:bg-[#63a8f2] group-hover:text-[#132948] transition">
                <FiAward />
              </div>
              <h3 className="text-lg font-bold text-[#132948] mb-3">
                Certification
              </h3>
              <p className="text-gray-600 text-sm leading-7">
                Receive internship completion certificates.
              </p>
            </div>

            <div className="group rounded-2xl bg-[#f3f8ff] border border-[#dceaff] p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#63a8f2] transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#132948] text-[#b8dcff] text-3xl mb-5 group-hover:bg-[#63a8f2] group-hover:text-[#132948] transition">
                <FiAward />
              </div>
              <h3 className="text-lg font-bold text-[#132948] mb-3">
                Certification
              </h3>
              <p className="text-gray-600 text-sm leading-7">
                Receive internship completion certificates.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f3f8ff] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#132948] via-[#1b416b] to-[#63a8f2] px-6 py-12 md:px-14 md:py-16 text-center shadow-2xl">

            <div className="absolute -top-20 -right-16 w-64 h-64 rounded-full border-[35px] border-white/10" />
            <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-white/10 blur-2xl" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs md:text-sm font-semibold text-[#d7eaff]">
                <FiUsers /> YOUR FUTURE STARTS HERE
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-5 leading-tight">
                Ready To Start Your Career?
              </h2>

              <p className="mt-5 text-blue-100 text-sm md:text-base leading-7 max-w-2xl mx-auto">
                Join our internship program and gain real-world experience with
                live projects, expert mentorship, and industry-ready skills.
              </p>

              <a
                href="#about-company"
                className="mt-8 inline-flex items-center justify-center gap-3 bg-[#63a8f2] hover:bg-white text-[#132948] px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Apply Internship
                <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;