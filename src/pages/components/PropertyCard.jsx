import { FaBed, FaBath } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function PropertyCard({ property }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:!scale-[1.02] transition-all"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="flex p-4 w-full space-x-4 min-h-[240px]">
        {/* Image Section */}
        <div className="w-[50%]">
          <div className="relative h-full min-h-[240px]">
            <img
              src={property.image}
              alt="Property"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-2 right-2 text-[12px] flex gap-2">
              <span className="bg-white px-3 py-1 rounded-full shadow">
                {property?.status[0]}
              </span>
              <span className="bg-white px-3 py-1 rounded-full shadow">
                {property?.status[1]}
              </span>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-[65%] flex flex-col mt-4">
          <div>
            <p className="text-xl font-semibold text-gray-800">
              {property.price}
            </p>
            <p className="text-xs text-gray-500">{property.period}</p>

            <div className="flex items-center text-[12px] text-gray-600 space-x-4 py-4">
              <span className="flex items-center gap-1">
                <FaBed /> {property.bedroom} Bedroom
              </span>
              <span className="flex items-center gap-1">
                <FaBath /> {property.bathroom} Bathroom
              </span>
              <span className="flex items-center gap-1">
                <HiLocationMarker /> {property.location}
              </span>
            </div>

            <p className="text-md font-medium text-gray-700 mb-7">
              {property.title}
            </p>
          </div>

          <button className="mt- bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-1 cursor-pointer hover:bg-blue-700 transition w-[30%]">
            View <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
