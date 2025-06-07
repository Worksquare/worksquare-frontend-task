import { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

const PropertySearch = ({ onSearch }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    priceRange: "₦250,000 - ₦350,000",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    if (onSearch) onSearch(filters);
  };

  return (
    <div
      className="bg-white rounded-2xl border-1 border-gray-200  p-6 max-w-6xl mx-auto flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:justify-between"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      {/* Property Type */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="bg-blue-600 text-white text-xl p-3 rounded-xl">
          <IoHome />
        </div>
        <div>
          <p className="text-sm font-medium">Property Type</p>
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="text-gray-500 text-sm mt-1 outline-none w-full"
          >
            <option value="">All</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Land">Land</option>
            <option value="Flat">Flat</option>
            <option value="Terrace">Terrace</option>
            <option value="Duplex">Duplex</option>
            <option value="Short Let">Short Let</option>
            <option value="Penthouse">Penthouse</option>
          </select>
        </div>
      </div>

      {/* Divider - Hidden on small screens */}
      <div className="hidden md:block h-10 border-l border-gray-200"></div>

      {/* Location */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="bg-blue-600 text-white text-xl p-3 rounded-xl">
          <FaMapMarkerAlt />
        </div>
        <div>
          <p className="text-sm font-medium">Location</p>
          <input
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="text-gray-500 text-sm mt-1 outline-none w-full"
            placeholder="Enter location"
          />
        </div>
      </div>

      <div className="hidden md:block h-10 border-l border-gray-200"></div>

      {/* Price Range */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="bg-blue-600 text-white text-xl p-3 rounded-xl">
          <TbCurrencyNaira />
        </div>
        <div>
          <p className="text-sm font-medium">Price Range</p>
          <p className="text-gray-500 text-sm">{filters.priceRange}</p>
        </div>
      </div>

      <div className="hidden md:block h-10 border-l border-gray-200"></div>

      {/* Search Button */}
      <div className="w-full sm:w-auto">
        <button
          onClick={handleSearch}
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 cursor-pointer text-white text-lg px-6 py-3 rounded-xl flex justify-center items-center gap-2 transition"
        >
          Search <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default PropertySearch;
