import { Star } from "lucide-react";

export default function HeroStats() {
  return (
    <div className="w-full mt-10 sm:mt-12 px-4 sm:px-6 md:px-10">

      {/* Divider */}
      <div className="border-t border-gray-200 mb-6 sm:mb-8"></div>

      {/* Stats Container */}
      <div className="
        grid grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        gap-8 sm:gap-10 md:gap-16 
        text-center md:text-left
      ">

        {/* Deliveries */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold 
          bg-gradient-to-r from-blue-800 to-purple-700 
          bg-clip-text text-transparent">
            🚀 Growing Fast
          </h3>
          <p className="text-gray-900 mt-2 text-sm sm:text-base">
            Deliveries
          </p>
        </div>

        {/* Riders */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold 
          bg-gradient-to-r from-blue-800 to-purple-700 
          bg-clip-text text-transparent">
            👥 Trusted by Users
          </h3>
          <p className="text-gray-900 mt-2 text-sm sm:text-base">
            Riders
          </p>
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold 
            bg-gradient-to-r from-blue-800 to-purple-700 
            bg-clip-text text-transparent">
              ⭐ Highly Rated Service
            </h3>
            <Star className="text-purple-700 fill-purple-700 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
          </div>
          <p className="text-gray-900 mt-2 text-sm sm:text-base">
            Rating
          </p>
        </div>

      </div>
    </div>
  );
}
