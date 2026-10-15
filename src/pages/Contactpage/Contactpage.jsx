

import React from "react";

import {

  FiUser,

  FiMail,

  FiPhone,

  FiMapPin,

  FiMessageSquare,

  FiArrowRight,

  FiCode,

  FiSend,

  FiClock,

} from "react-icons/fi";



export default function Contact() {

  return (

    <section className="relative overflow-hidden bg-white py-10 lg:py-10">

      {/* Background Decoration */}

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#eaf3ff]/70 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#f4f8ff] blur-3xl" />



      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          {/* <span className="inline-flex items-center gap-2 rounded-full border border-[#c7ddf8] bg-[#f4f8ff] px-5 py-2 text-sm font-bold tracking-wide text-[#132948]">

            <FiMessageSquare />

            GET IN TOUCH

          </span> */}



          <h3 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-4xl">

            Contact{" "}

            <span className="text-[#132948]">Us</span>

          </h3>

                    <div className="mx-auto mt-1 h-0.5 w-24 rounded-full bg-gradient-to-r from-[#132948] via-[#132948] to-[#63a8f2]" />





          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-500 sm:text-lg">

          Have questions? Fill out the form below and our team will contact you shortly.

          </p>



          {/* <div className="mx-auto mt-7 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#132948] via-[#132948] to-[#63a8f2]" /> */}

        </div>



        {/* Main Content */}

        <div className="grid items-stretch gap-8 lg:grid-cols-5 lg:gap-10">



          {/* Left Contact Information */}

          <div className="relative flex flex-col overflow-hidden rounded-[2rem] bg-gray-950 p-8 text-white shadow-2xl sm:p-10 lg:col-span-2">

            {/* Decorative circles */}

            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[35px] border-[#132948]/10" />

            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#132948]/10 blur-2xl" />



            <div className="relative z-10">

              <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-[#132948] via-[#132948] to-[#63a8f2] text-white shadow-lg shadow-[#132948]/30">

                <FiCode size={32} />

              </div>



              <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-[#63a8f2]">

                Contact Information

              </p>



              <h2 className="text-3xl font-extrabold leading-tight sm:text-2xl">

                Let's Build

                <br />

                Something <span className="text-[#132948]">Great.</span>

              </h2>



              <p className="mt-5 leading-7 text-gray-400">

                Connect with our team for software development, IT training,

                internship opportunities.

              </p>



              <div className="mt-10 space-y-7">

                {/* Email */}

                <a

                  href="mailto:dkrafttechnologies\@gmail.com"

                  className="group flex items-center gap-4"

                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#63a8f2] transition duration-300 group-hover:border-[#132948] group-hover:bg-[#132948] group-hover:text-white">

                    <FiMail size={23} />

                  </div>



                  <div className="min-w-0">

                    <p className="text-sm text-gray-400">Email Us</p>

                    <p className="mt-1 break-all font-semibold transition group-hover:text-[#63a8f2]">

                   dkrafttechnologies\@gmail.com

                    </p>

                  </div>

                </a>









              </div>



              {/* Bottom Highlight */}

              <div className="mt-10 rounded-2xl border border-[#132948]/20 bg-[#132948]/10 p-5">

                <div className="flex items-start gap-3">

                  <FiClock

                    className="mt-1 shrink-0 text-[#63a8f2]"

                    size={22}

                  />

                  <div>

                    <h3 className="font-bold">Ready to Get Started?</h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">

                      Send us your enquiry and let's discuss your next big idea.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>



          {/* Right Contact Form */}

          <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/60 sm:p-10 lg:col-span-3">

            <div className="mb-9 flex items-start justify-between gap-4">

              <div>

                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-2xl">

                  Send Us a Message

                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">

                  Fill in the details below. We'd love to hear from you!

                </p>

              </div>



              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f4f8ff] text-[#132948] sm:flex">

                <FiSend size={26} />

              </div>

            </div>



            <form

              className="space-y-6"

              onSubmit={(e) => {

                e.preventDefault();

              }}

            >

              {/* Name and Email */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">

                    Full Name <span className="text-[#132948]">\*</span>

                  </label>



                  <div className="group flex items-center rounded-xl border border-gray-200 bg-gray-50 transition duration-300 focus-within:border-[#132948] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#eaf3ff]">

                    <FiUser className="ml-4 shrink-0 text-gray-400 transition group-focus-within:text-[#132948]" />

                    <input

                      type="text"

                      name="name"

                      placeholder="Enter your name"

                      required

                      className="w-full bg-transparent px-3 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"

                    />

                  </div>

                </div>



                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">

                    Email Address <span className="text-[#132948]">\*</span>

                  </label>



                  <div className="group flex items-center rounded-xl border border-gray-200 bg-gray-50 transition duration-300 focus-within:border-[#132948] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#eaf3ff]">

                    <FiMail className="ml-4 shrink-0 text-gray-400 transition group-focus-within:text-[#132948]" />

                    <input

                      type="email"

                      name="email"

                      placeholder="you\@example.com"

                      required

                      className="w-full bg-transparent px-3 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"

                    />

                  </div>

                </div>

              </div>



              {/* Phone */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">

                  Contact Number <span className="text-[#132948]">\*</span>

                </label>



                <div className="group flex items-center rounded-xl border border-gray-200 bg-gray-50 transition duration-300 focus-within:border-[#132948] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#eaf3ff]">

                  <FiPhone className="ml-4 shrink-0 text-gray-400 transition group-focus-within:text-[#132948]" />

                  <input

                    type="tel"

                    name="phone"

                    placeholder="Enter your contact number"

                    required

                    className="w-full bg-transparent px-3 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"

                  />

                </div>

              </div>







              {/* Message */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">

                  Your Message <span className="text-[#132948]">\*</span>

                </label>



                <div className="group flex items-start rounded-xl border border-gray-200 bg-gray-50 transition duration-300 focus-within:border-[#132948] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#eaf3ff]">

                  <FiMessageSquare className="ml-4 mt-4 shrink-0 text-gray-400 transition group-focus-within:text-[#132948]" />

                  <textarea

                    name="message"

                    rows="4"

                    placeholder="Tell us about your enquiry..."

                    required

                    className="w-full resize-none bg-transparent px-3 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"

                  />

                </div>

              </div>



              {/* Submit Button */}

              <button

                type="submit"

                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#132948] via-[#132948] to-[#63a8f2] px-4 py-3 text-base font-bold text-white shadow-lg shadow-[#132948]/25 transition duration-300 hover:-translate-y-1 hover:bg-gray-950 hover:shadow-xl sm:w-auto sm:min-w-56"

              >

                Submit Enquiry

                <FiArrowRight

                  size={20}

                  className="transition duration-300 group-hover:translate-x-1"

                />

              </button>



              <p className="text-xs leading-5 text-gray-400">

                By submitting this form, you agree to be contacted regarding

                your enquiry.

              </p>

            </form>

          </div>

        </div>

      </div>

    </section>

  );

}
