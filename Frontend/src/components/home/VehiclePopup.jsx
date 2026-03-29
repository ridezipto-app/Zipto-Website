import { X } from "lucide-react";

export default function VehiclePopup({ vehicle, close }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">

      {/* Glow Background Effects */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Gradient Border */}
      <div className="w-[92%] max-w-xl p-[1.5px] rounded-3xl bg-gradient-to-r from-blue-600 to-orange-500 shadow-2xl">

        {/* Glass Card */}
        <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10">

          {/* Close Button */}
          <button
            onClick={close}
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black transition"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-6">

            {/* Icon */}
            <div className={`p-6 rounded-2xl text-white mb-4 shadow-md ${vehicle.color}`}>
              <img
                src={vehicle.icon}
                alt={vehicle.title}
                className="w-20 h-20 object-contain transition duration-300 hover:scale-110"
              />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900">
              {vehicle.title}
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
              {vehicle.subtitle}
            </p>
          </div>

          {/* Capacity Card */}
          <div className="bg-gray-50 border rounded-xl px-5 py-4 mb-6 text-center">
            <p className="text-sm text-gray-500">Capacity</p>
            <p className="text-lg font-semibold text-gray-900">
              {vehicle.capacity}
            </p>
          </div>

          {/* Content Sections */}
          <div className="grid gap-6">

            {/* Uses */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Ideal Uses
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {vehicle.details.uses.map((use, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-500">•</span> {use}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Why Choose This Vehicle
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {vehicle.details.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600">•</span> {b}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
