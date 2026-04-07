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
        "service_vuy9nal",
        "template_b1cbjbn",
        form.current,
        "_-FpBW5zEY1qTTtOr"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        () => {
          alert("Failed to send ❌");
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-10 sm:py-16"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.7)] border border-white/10">

        {/* LEFT SIDE */}
        <div className="bg-[#0F1A2E] text-white p-6 sm:p-8 md:p-12 flex flex-col justify-between">
          <div>
          
            <p className="text-orange-500 uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-4 sm:mb-6">
              ● Support & Contact
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
              Let’s <br />
              <span className="text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]">
                talk_
              </span>
            </h1>

            <p className="text-gray-400 mb-6 sm:mb-10 text-sm leading-relaxed">
              Fast delivery needs fast support. Drop us a message and we'll get
              back to you — not in days, in minutes.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {[
                { icon: <FaEnvelope />, title: "Email", value: "support@ridezipto.com" },
                { icon: <MdAccessTime />, title: "Response", value: "24 × 7 Support" },
                {
                  icon: <FaPhoneAlt />,
                  title: "Phone Hours",
                  value: "10 AM – 7 PM",
                  phone: "+919090029996"
                },
              ].map((item, i) => {
                const content = (
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#16243C] border border-white/10 
                  hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                    <div className="bg-orange-500 p-2 sm:p-3 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-400 uppercase">
                        {item.title}
                      </p>
                      <p className="text-sm sm:text-base font-medium">
                        {item.value}
                      </p>
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
        <div className="bg-[#F5F5F5] p-6 sm:p-8 md:p-12">
          <p className="text-gray-400 mb-6 sm:mb-8 tracking-widest text-xs sm:text-sm">
            <span className="text-orange-500 font-bold mr-2">01</span>
            SEND A MESSAGE
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-6 sm:space-y-10">

            {/* NAME */}
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-gray-300 py-2 sm:py-3 outline-none 
              focus:border-orange-500 transition"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-gray-300 py-2 sm:py-3 outline-none 
              focus:border-orange-500 transition"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              className="w-full bg-transparent border-b border-gray-300 py-2 sm:py-3 outline-none resize-none 
              focus:border-orange-500 transition"
            ></textarea>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 sm:py-4 rounded-xl font-semibold 
              transition-all duration-300 hover:scale-[1.02]"
            >
              SEND MESSAGE →
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
