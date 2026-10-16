
import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Internship", path: "/internship" },
    { name: "Contact Us", path: "/contact" },
  ];

  const internships = [
    "Web Development",
    "Java Development",
    "PHP Development",
  
  ];

  return (
    <footer className="relative overflow-hidden bg-[#132948] text-white">

      {/* Background Decorations */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#63a8f2]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#63a8f2]/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-7">

    

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-extrabold tracking-tight">
                <span className="text-[#63a8f2]">Dkraft Technologies</span>
              </h2>
            </Link>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#63a8f2]" />

            <p className="mt-5 text-sm leading-7 text-slate-300">
              Build your future with professional training and internship
              programs in Web Development, Python, Java, React JS, PHP,
              and more.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://wa.me/917263098279"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-green-500 hover:text-white"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition duration-300 hover:-translate-y-1 hover:border-pink-400 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 flex items-center gap-3 text-lg font-bold">
              <span className="h-7 w-1 rounded-full bg-[#63a8f2]" />
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-3 text-sm text-slate-300 transition duration-300 hover:translate-x-1 hover:text-[#63a8f2]"
                  >
                    <FaArrowRight className="text-xs text-[#63a8f2] transition duration-300 group-hover:translate-x-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Internship */}
          <div>
            <h3 className="mb-6 flex items-center gap-3 text-lg font-bold">
              <span className="h-7 w-1 rounded-full bg-[#63a8f2]" />
              Our Programs
            </h3>

            <ul className="space-y-4">
              {internships.map((item) => (
                <li key={item}>
                  <Link
                    to="/internship"
                    className="group flex items-center gap-3 text-sm text-slate-300 transition duration-300 hover:translate-x-1 hover:text-[#63a8f2]"
                  >
                    <FaCode className="text-[#63a8f2]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
              <FaLaptopCode className="text-2xl text-[#63a8f2]" />
              <div>
                <p className="text-sm font-semibold">Practical Learning</p>
                <p className="mt-1 text-xs text-slate-400">
                  Learn by building projects
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
         <div className="w-full lg:min-w-[320px]">
            <h3 className="mb-6 flex items-center gap-3 text-lg font-bold">
              <span className="h-7 w-1 rounded-full bg-[#63a8f2]" />
              Contact Us
            </h3>

            <div className="space-y-4">

              {/* Email Card */}
              <a
                href="mailto:dkrafttechnologies@gmail.com"
                className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-[#63a8f2]/50 hover:bg-[#63a8f2]/10"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#63a8f2]/15 text-lg text-[#63a8f2] transition group-hover:bg-[#63a8f2] group-hover:text-[#132948]">
                  <FaEnvelope />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-slate-400">
                    Email Address
                  </span>
                  <span className="mt-1 block break-all text-sm leading-6 text-white group-hover:text-[#8dc5ff]">
                    dkrafttechnologies@gmail.com
                  </span>
                </span>
              </a>

              {/* WhatsApp Card */}
              {/* <a
                href="https://wa.me/917263098279"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-green-400/50 hover:bg-green-500/10"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/15 text-xl text-green-400 transition group-hover:bg-green-500 group-hover:text-white">
                  <FaWhatsapp />
                </span>

                <span>
                  <span className="block text-xs text-slate-400">
                    WhatsApp Support
                  </span>
                  <span className="mt-1 block text-sm font-medium text-white group-hover:text-green-400">
                    Chat with Us
                  </span>
                </span>

                <FaArrowRight className="ml-auto text-xs text-slate-500 transition group-hover:translate-x-1 group-hover:text-green-400" />
              </a> */}

              {/* Location */}
              <div className="flex items-center gap-3 px-1 pt-1">
                <FaMapMarkerAlt className="shrink-0 text-[#63a8f2]" />
                <p className="text-sm text-slate-300">
                  Connect with us for training and internship enquiries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#63a8f2]/50 to-transparent" />

       {/* Bottom Footer */}
<div className="flex flex-col items-center justify-center gap-4 text-center">
  <p className="text-sm text-slate-400">
    © {new Date().getFullYear()}{" "}
    <span className="font-semibold text-[#63a8f2]">
      dkrafttechnologies
    </span>
    . All Rights Reserved.
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;