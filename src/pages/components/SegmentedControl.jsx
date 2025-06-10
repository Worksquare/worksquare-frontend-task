import { useState } from "react";

const SegmentedControl = () => {
  const options = ["Buy", "Rent", "Lease"];
  const [active, setActive] = useState("Buy");

  return (
    <div className="flex justify-center md:justify-start py-[2rem] md:px-[10rem]">
      <div className="bg-blue-500 rounded-full text-xl flex items-center gap-2 py-3 px-4 w-full max-w-xs sm:max-w-sm md:max-w-md">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setActive(option)}
            className={`flex-1 w-4 py-2 rounded-full font-medium text-sm transition-all duration-200 text-center
              ${
                active === option
                  ? "bg-white text-blue-600"
                  : "text-white hover:bg-blue-600"
              }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SegmentedControl;
