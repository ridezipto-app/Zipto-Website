import riderImg from "../../assets/Rider.png";
import { useState } from "react";
import { FaMoneyBillWave, FaClock, FaMotorcycle, FaUsers } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

export default function BecomeRider() {
  const [showPopup, setShowPopup] = useState(false);

  const benefits = [
    {
      icon: <FaMoneyBillWave className="text-blue-600 text-xl" />,
      title: "High Earnings",
      desc: "Earn upto ₹60k/month",
    },
    {
      icon: <FaClock className="text-orange-600 text-xl" />,
      title: "Flexible Hours",
      desc: "Work anytime",
    },
    {
      icon: <FaMotorcycle className="text-blue-600 text-xl" />,
      title: "Easy Delivery",
      desc: "Short distance orders",
    },
    {
      icon: <FaUsers className="text-orange-600 text-xl" />,
      title: "Growing Community",
      desc: "Trusted by thousands",
    },
  ];

  return (
    <section
      id="rider"
      className="relative py-20 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden scroll-mt-28"
    >
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT IMAGE */}
        <div className="relative animate-slideLeft">
          <img
            src={riderImg}
            alt="Zipto Rider"
            className="rounded-3xl shadow-2xl animate-float"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-white shadow-xl rounded-2xl px-6 py-4 flex items-center gap-4 animate-floatCard">
            <div className="bg-gradient-to-r from-blue-600 to-orange-600 text-white p-3 rounded-xl">
              <FaMoneyBillWave size={22} />
            </div>

            <div>
              <h3 className="text-xl font-bold">₹60,000</h3>
              <p className="text-gray-500 text-sm">Avg Monthly Earning</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="animate-slideRight">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-600 text-transparent bg-clip-text">
            Become a Zipto Rider
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Become part of our growing delivery network and earn more with flexible hours and exciting weekly bonuses.
          </p>

          {/* BENEFITS */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-5 flex gap-4 items-center hover:scale-110 hover:shadow-xl transition duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {item.icon}
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
            onClick={() => setShowPopup(true)}
            className="bg-gradient-to-r from-blue-600 to-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition animate-pulseSlow"
          >
            Join as Rider
          </button>

          <p className="text-sm text-gray-500 mt-4">
            *Terms & conditions apply
          </p>
        </div>
      </div>

      {/* ✅ POPUP MOVED OUTSIDE GRID */}
{showPopup && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50">

    {/* Glow Effects */}
    <div className="absolute w-72 h-72 bg-orange-500/20 blur-3xl rounded-full top-10 left-10"></div>
    <div className="absolute w-72 h-72 bg-pink-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

    {/* Gradient Border Wrapper */}
    <div className="w-[340px] p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 shadow-[0_20px_80px_rgba(0,0,0,0.8)]">

      {/* Glass Card */}
      <div className="relative bg-[#0B1220]/90 backdrop-blur-xl rounded-3xl p-8 text-center">

        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition"
        >
          ✕
        </button>

        {/* Icon Circle */}
        <div className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center bg-gradient-to-br from-orange-500 to-pink-500 shadow-lg">
          <FaDownload className="text-white text-xl" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-2">
          Coming Soon 🚀
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          Our mobile app is on the way.  
          Get ready for a faster & smoother delivery experience.
        </p>

        {/* Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="w-full py-3 rounded-xl font-semibold text-white 
          bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600
          hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(249,115,22,0.4)]
          transition-all duration-300"
        >
          Got it 👍
        </button>

      </div>
    </div>
  </div>
)}

      {/* Animations */}
      <style>
        {`
        .animate-float{ animation: float 5s ease-in-out infinite; }
        @keyframes float{
          0%{transform:translateY(0)}
          50%{transform:translateY(-20px)}
          100%{transform:translateY(0)}
        }

        .animate-floatCard{ animation: floatCard 4s ease-in-out infinite; }
        @keyframes floatCard{
          0%{transform:translateY(0)}
          50%{transform:translateY(-10px)}
          100%{transform:translateY(0)}
        }

        .animate-blob{ animation: blob 8s infinite; }
        @keyframes blob{
          0%{transform:translate(0,0) scale(1)}
          33%{transform:translate(30px,-40px) scale(1.1)}
          66%{transform:translate(-20px,20px) scale(0.9)}
          100%{transform:translate(0,0) scale(1)}
        }

        .animation-delay-2000{ animation-delay:2s; }

        .animate-slideLeft{ animation: slideLeft 1s ease forwards; }
        .animate-slideRight{ animation: slideRight 1s ease forwards; }

        @keyframes slideLeft{
          from{opacity:0; transform:translateX(-60px)}
          to{opacity:1; transform:translateX(0)}
        }

        @keyframes slideRight{
          from{opacity:0; transform:translateX(60px)}
          to{opacity:1; transform:translateX(0)}
        }

        .animate-slideUp{
          opacity:0;
          animation: slideUp 0.8s ease forwards;
        }

        @keyframes slideUp{
          from{opacity:0; transform:translateY(30px)}
          to{opacity:1; transform:translateY(0)}
        }

        .animate-pulseSlow{
          animation:pulseSlow 3s infinite;
        }

        @keyframes pulseSlow{
          0%{box-shadow:0 0 0 0 rgba(59,130,246,0.6)}
          70%{box-shadow:0 0 0 12px rgba(59,130,246,0)}
          100%{box-shadow:0 0 0 0 rgba(59,130,246,0)}
        }
        `}
      </style>
    </section>
  );
}
