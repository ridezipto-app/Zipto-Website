import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vuy9nal",   // 🔴 replace
        "template_b1cbjbn",  // 🔴 replace
        form.current,
        "_-FpBW5zEY1qTTtOr"    // 🔴 replace
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
          form.current.reset(); // clear form after submit
        },
        (error) => {
          alert("Failed to send ❌");
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-16 scroll-mt-28"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.7)] border border-white/10">
        
        {/* LEFT SIDE */}
        <div className="bg-[#0F1A2E] text-white p-12 flex flex-col justify-between">
          <div>
            <p className="text-orange-500 uppercase tracking-[0.25em] text-xs mb-6">
              ● Support & Contact
            </p>

            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Let’s <br />
              <span className="text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]">
                talk_
              </span>
            </h1>

            <p className="text-gray-400 mb-10 text-sm leading-relaxed">
              Fast delivery needs fast support. Drop us a message and we'll get
              back to you — not in days, in minutes.
            </p>

            <div className="space-y-5">
             {[
  { icon: <FaEnvelope />, title: "Email", value: "supportzipto@gmail.com" },
  { icon: <MdAccessTime />, title: "Response", value: "24 × 7 Support" },
  { 
    icon: <FaPhoneAlt />, 
    title: "Phone Hours", 
    value: "10 AM – 7 PM",
    phone: "+919090029996"
  },
].map((item, i) => {
  const content = (
    <div
      className="flex items-center gap-4 p-4 rounded-xl bg-[#16243C] border border-white/10 
      hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
    >
      <div className="bg-orange-500 p-3 rounded-lg shadow-md">
        {item.icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase">{item.title}</p>
        <p className="font-medium">{item.value}</p>
      </div>
    </div>
  );

  return item.phone ? (
    <a key={i} href={`tel:${item.phone}`}>
      {content}
    </a>
  ) : (
    <div key={i}>{content}</div>
  );
})}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#F5F5F5] p-12">
          <p className="text-gray-400 mb-8 tracking-widest text-sm">
            <span className="text-orange-500 font-bold mr-2">01</span>
            SEND A MESSAGE
          </p>

          {/* ✅ CONNECTED FORM */}
          <form ref={form} onSubmit={sendEmail} className="space-y-10">
            
            {/* NAME */}
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-gray-300 py-3 outline-none 
                focus:border-orange-500 focus:shadow-[0_4px_10px_rgba(249,115,22,0.2)] transition"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-gray-300 py-3 outline-none 
                focus:border-orange-500 focus:shadow-[0_4px_10px_rgba(249,115,22,0.2)] transition"
              />
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your Message"
                className="w-full bg-transparent border-b border-gray-300 py-3 outline-none resize-none 
                focus:border-orange-500 focus:shadow-[0_4px_10px_rgba(249,115,22,0.2)] transition"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold 
              transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(249,115,22,0.4)] hover:scale-[1.02]"
            >
              SEND MESSAGE →
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
