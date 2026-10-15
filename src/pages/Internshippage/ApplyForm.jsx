
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiBookOpen,
  FiFileText,
  FiMessageSquare,
  FiUpload,
  FiAward,
} from "react-icons/fi";

export default function ApplyForm() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    college: "",
    education: "",
    message: "",
    resume: null,
    course: location.state?.course || "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917875817771";

    const message = `
🎓 *New Internship Application*

👤 *Full Name:* ${formData.fullname}
📧 *Email:* ${formData.email}
📞 *Contact Number:* ${formData.contact}
📍 *City:* ${formData.city}
🏠 *Full Address:* ${formData.address}

🏫 *College Name:* ${formData.college}
🎓 *Education:* ${formData.education}
📚 *Course:* ${formData.course || "Not selected"}

💬 *Message:*
${formData.message || "Not provided"}

📄 *Resume File:* ${formData.resume?.name || "Not uploaded"}
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#63a8f2]/20 via-white to-[#63a8f2]/10 py-20 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#132948] to-[#63a8f2] text-white text-center py-10">
          <h2 className="text-4xl font-bold">
            Internship Application
          </h2>

          <p className="mt-2 text-white/90">
            Fill in your details and upload your resume.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 md:p-10 grid md:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <div className="relative">
            <FiUser className="absolute left-4 top-4 text-[#132948]" />

            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 border border-[#63a8f2]/50 rounded-xl focus:ring-2 focus:ring-[#63a8f2] focus:border-[#132948] outline-none transition"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-4 top-4 text-[#132948]" />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 border border-[#63a8f2]/50 rounded-xl focus:ring-2 focus:ring-[#63a8f2] focus:border-[#132948] outline-none transition"
              required
            />
          </div>

          {/* Contact */}
          <div className="relative">
            <FiPhone className="absolute left-4 top-4 text-[#132948]" />

            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength={10}
              title="Please enter a valid 10-digit mobile number"
              className="w-full pl-12 pr-4 py-3 border border-[#63a8f2]/50 rounded-xl focus:ring-2 focus:ring-[#63a8f2] focus:border-[#132948] outline-none transition"
              required
            />
          </div>

          {/* City */}
          <div className="relative">
            <FiMapPin className="absolute left-4 top-4 text-[#132948]" />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 border border-[#63a8f2]/50 rounded-xl focus:ring-2 focus:ring-[#63a8f2] focus:border-[#132948] outline-none transition"
              required
            />
          </div>

          {/* Address */}
          <div className="relative md:col-span-2">
            <FiMapPin className="absolute left-4 top-4 text-[#132948]" />

            <textarea
              rows="3"
              name="address"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 border border-[#63a8f2]/50 rounded-xl focus:ring-2 focus:ring-[#63a8f2] focus:border-[#132948] outline-none transition"
              required
            />
          </div>

          {/* College */}
          <div className="relative">
            <FiBookOpen className="absolute left-4 top-4 text-[#132948]" />

            <input
              type="text"
              name="college"
              placeholder="College Name"
              value={formData.college}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 border border-[#63a8f2]/50 rounded-xl focus:ring-2 focus:ring-[#63a8f2] focus:border-[#132948] outline-none transition"
              required
            />
          </div>

          {/* Education */}
          <div className="relative">
            <FiAward className="absolute left-4 top-4 text-[#132948]" />

            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 border border-[#63a8f2]/50 rounded-xl focus:ring-2 focus:ring-[#63a8f2] focus:border-[#132948] outline-none transition"
              required
            >
              <option value="">Select Education</option>
              <option value="B.E / B.Tech">B.E / B.Tech</option>
              <option value="BCA">BCA</option>
              <option value="B.Sc">B.Sc</option>
              <option value="MCA">MCA</option>
              <option value="M.Sc">M.Sc</option>
              <option value="Diploma">Diploma</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Course */}
          <div className="relative md:col-span-2">
            <FiFileText className="absolute left-4 top-4 text-[#132948]" />

            <input
              type="text"
              name="course"
              placeholder="Selected Course"
              value={formData.course}
              readOnly
              className="w-full pl-12 pr-4 py-3 border border-[#63a8f2]/40 rounded-xl bg-[#63a8f2]/10 text-[#132948]"
            />
          </div>

          {/* Resume */}
          <div className="relative md:col-span-2">
            <label className="flex items-center gap-3 border-2 border-dashed border-[#63a8f2] rounded-xl p-5 cursor-pointer hover:bg-[#63a8f2]/10 transition">
              <FiUpload className="text-3xl text-[#132948]" />

              <div>
                <p className="font-semibold text-[#132948]">
                  Upload Resume
                </p>

                <p className="text-sm text-gray-500">
                  PDF, DOC, DOCX (Max 5MB)
                </p>
              </div>

              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="hidden"
                required
              />
            </label>

            {formData.resume && (
              <p className="text-[#132948] mt-2 font-medium break-all">
                {formData.resume.name}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="relative md:col-span-2">
            <FiMessageSquare className="absolute left-4 top-4 text-[#132948]" />

            <textarea
              rows="4"
              name="message"
              placeholder="Why do you want to join this internship?"
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 border border-[#63a8f2]/50 rounded-xl focus:ring-2 focus:ring-[#63a8f2] focus:border-[#132948] outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#132948] to-[#63a8f2] text-white py-4 rounded-xl text-lg font-semibold hover:from-[#63a8f2] hover:to-[#132948] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
