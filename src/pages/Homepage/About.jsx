
import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiUsers,
  FiAward,
} from "react-icons/fi";

export default function About() {
  return (
    <section className="bg-white py-17 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5 max-w-xl mx-auto"
          >
            {/* Left Big Image */}
            <div className="row-span-2">
              <img
                src="https://static.vecteezy.com/system/resources/previews/020/069/734/large_2x/software-development-concepts-and-programming-for-various-devices-software-engineer-computer-programmer-coding-process-chart-testing-platform-data-analytics-online-safety-photo.jpg"
                alt=""
                className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
              />
            </div>

            {/* Top Right */}
            <div>
              <img
                src="https://burst.shopifycdn.com/photos/coding-on-laptop.jpg?width=1200&format=pjpg&exif=0&iptc=0"
                alt=""
                className="w-full h-[200px] object-cover rounded-3xl shadow-xl"
              />
            </div>

            {/* Bottom Right */}
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWT4Tj7evamjHnSArQYbI7N72WNqOEdPHC4bPAtVehUpwDl8QTiS9b1I0&s=10"
                alt=""
                className="w-full h-[200px] object-cover rounded-3xl shadow-xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#63a8f2] font-semibold tracking-widest uppercase">
              About Us
            </span>

            <h2 className="text-2xl font-bold mt-1 leading-tight text-[#132948]">
              Creating Innovative Software For Growth
            </h2>

            <p className="text-gray-600 mt-3 leading-8">
              We specialize in Website Development, Software Development,
              Internship Solutions. Our mission is to transform ideas into
              innovative digital products while providing students with
              real-world Internship opportunities.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">

              {/* Software Development */}
              <div className="bg-[#63a8f2]/10 p-4 rounded-xl hover:shadow-lg hover:bg-[#63a8f2]/20 duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#132948] flex items-center justify-center text-white text-sm">
                    <FiCode />
                  </div>

                  <h4 className="font-semibold text-[#132948]">
                    Software Development
                  </h4>
                </div>
              </div>

              {/* Internship Program */}
              <div className="bg-[#63a8f2]/10 p-4 rounded-xl hover:shadow-lg hover:bg-[#63a8f2]/20 duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#63a8f2] flex items-center justify-center text-[#132948] text-sm">
                    <FiUsers />
                  </div>

                  <h4 className="font-semibold text-[#132948]">
                    Internship Program
                  </h4>
                </div>
              </div>

              {/* Website Development */}
              <div className="bg-[#63a8f2]/10 p-4 rounded-xl hover:shadow-lg hover:bg-[#63a8f2]/20 duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#132948] flex items-center justify-center text-white text-sm">
                    <FiAward />
                  </div>

                  <h4 className="font-semibold text-[#132948]">
                    Website Development
                  </h4>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
