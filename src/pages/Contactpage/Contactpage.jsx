
import React from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiArrowRight,
  FiCode,
  FiSend,
  FiClock,
} from "react-icons/fi";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const whatsappMessage = `Hello DKRAFT Technologies,

New Contact Enquiry

Full Name: ${name}
Email Address: ${email}
Contact Number: ${phone}

Message: ${message}`;

    const whatsappURL = `https://wa.me/917263098279?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-white py-10 lg:py-14">
      {/* Background Decoration */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#63a8f2]/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#63a8f2]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#63a8f2]/40 bg-[#63a8f2]/10 px-4 py-2 text-sm font-bold tracking-wide text-[#132948]">
            <FiMessageSquare />
            GET IN TOUCH
          </span>

          <h3 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#132948] sm:text-4xl lg:text-4xl">
            Contact <span className="text-[#63a8f2]">Us</span>
          </h3>

          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#132948] to-[#63a8f2]" />

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-500 sm:text-lg">
            Have questions? Fill out the form below and our team will contact
            you shortly.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-stretch gap-8 lg:grid-cols-5 lg:gap-10">

          {/* Left Contact Information */}
          <div className="relative flex flex-col overflow-hidden rounded-[2rem] bg-[#132948] p-8 text-white shadow-xl shadow-[#132948]/15 sm:p-10 lg:col-span-2">

            {/* Decorative Circles */}
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[35px] border-[#63a8f2]/10" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#63a8f2]/10 blur-2xl" />

            <div className="relative z-10 flex h-full flex-col">

              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#63a8f2] text-[#132948] shadow-lg shadow-black/10">
                <FiCode size={28} />
              </div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-[#63a8f2]">
                Contact Information
              </p>

              <h2 className="text-3xl font-extrabold leading-tight sm:text-3xl">
                Let's Build
                <br />
                Something <span className="text-[#63a8f2]">Great.</span>
              </h2>

              <p className="mt-5 leading-7 text-white/70">
                Connect with our team for software development, IT training,
                and internship opportunities.
              </p>

              <div className="mt-10 space-y-7">

                {/* Email */}
                <a
                  href="mailto:dkrafttechnologies@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-[#63a8f2] transition duration-300 group-hover:border-[#63a8f2] group-hover:bg-[#63a8f2] group-hover:text-[#132948]">
                    <FiMail size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-white/60">Email Us</p>
                    <p className="mt-1 break-all font-semibold transition group-hover:text-[#63a8f2]">
                      dkrafttechnologies@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone / WhatsApp
                <a
                  href="https://wa.me/917263098279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-[#63a8f2] transition duration-300 group-hover:border-[#63a8f2] group-hover:bg-[#63a8f2] group-hover:text-[#132948]">
                    <FiPhone size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-white/60">Call / WhatsApp</p>
                    <p className="mt-1 font-semibold transition group-hover:text-[#63a8f2]">
                      +91 78758 17771
                    </p>
                  </div>
                </a> */}

              </div>

              {/* Bottom Highlight */}
              <div className="mt-auto pt-10">
                <div className="rounded-2xl border border-[#63a8f2]/25 bg-[#63a8f2]/10 p-5">
                  <div className="flex items-start gap-3">
                    <FiClock
                      className="mt-1 shrink-0 text-[#63a8f2]"
                      size={23}
                    />

                    <div>
                      <h3 className="font-bold text-white">
                        Ready to Get Started?
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/70">
                        Send us your enquiry and let's discuss your next big
                        idea.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Contact Form */}
          <div className="rounded-[2rem] border border-[#63a8f2]/20 bg-white p-6 shadow-xl shadow-[#132948]/5 sm:p-10 lg:col-span-3">

            <div className="mb-9 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-[#132948] sm:text-2xl">
                  Send Us a Message
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                  Fill in the details below. We'd love to hear from you!
                </p>
              </div>

              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#63a8f2]/15 text-[#132948] sm:flex">
                <FiSend size={26} />
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Name and Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#132948]">
                    Full Name <span className="text-[#63a8f2]">*</span>
                  </label>

                  <div className="group flex items-center rounded-xl border border-gray-200 bg-gray-50 transition duration-300 focus-within:border-[#63a8f2] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#63a8f2]/15">
                    <FiUser className="ml-4 shrink-0 text-gray-400 transition group-focus-within:text-[#132948]" />

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      autoComplete="name"
                      required
                      className="w-full rounded-xl bg-transparent px-3 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#132948]">
                    Email Address <span className="text-[#63a8f2]">*</span>
                  </label>

                  <div className="group flex items-center rounded-xl border border-gray-200 bg-gray-50 transition duration-300 focus-within:border-[#63a8f2] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#63a8f2]/15">
                    <FiMail className="ml-4 shrink-0 text-gray-400 transition group-focus-within:text-[#132948]" />

                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      className="w-full rounded-xl bg-transparent px-3 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#132948]">
                  Contact Number <span className="text-[#63a8f2]">*</span>
                </label>

                <div className="group flex items-center rounded-xl border border-gray-200 bg-gray-50 transition duration-300 focus-within:border-[#63a8f2] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#63a8f2]/15">
                  <FiPhone className="ml-4 shrink-0 text-gray-400 transition group-focus-within:text-[#132948]" />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your contact number"
                    autoComplete="tel"
                    required
                    className="w-full rounded-xl bg-transparent px-3 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#132948]">
                  Your Message <span className="text-[#63a8f2]">*</span>
                </label>

                <div className="group flex items-start rounded-xl border border-gray-200 bg-gray-50 transition duration-300 focus-within:border-[#63a8f2] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#63a8f2]/15">
                  <FiMessageSquare className="ml-4 mt-4 shrink-0 text-gray-400 transition group-focus-within:text-[#132948]" />

                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your enquiry..."
                    required
                    className="w-full resize-none rounded-xl bg-transparent px-3 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#132948] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#132948]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#63a8f2] hover:text-[#132948] hover:shadow-xl sm:w-auto sm:min-w-56"
              >
                Submit Enquiry 

                <FiArrowRight
                  size={20}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="text-xs leading-5 text-gray-400">
                By submitting this form, you agree to be contacted regarding
                your enquiry. WhatsApp will open with your details ready to
                send.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
