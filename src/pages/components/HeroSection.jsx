import HeroImage from "../../assets/images/hero_image.avif";

const HeroSection = () => {
  return (
    <section className="relative h-[300px] sm:h-[250px] md:h-[200px] w-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 lg:px-[10rem] text-center md:text-left gap-6 md:gap-0 overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />{" "}
        {/* 50% opacity dark overlay */}
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10 text-white gilda-display-regular">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold ">
          DreamDwell
        </h1>
        <p className="flex justify-end italic text-base sm:text-lg">Estates</p>
      </div>

      {/* Center Navigation */}
      <div className="relative z-10 bg-white/90 text-gray-800 rounded-full px-6 sm:px-8 py-3 sm:py-4 flex gap-4 sm:gap-6 shadow-md text-sm sm:text-base backdrop-blur-sm">
        <a href="#" className="hover:text-blue-600 transition-colors">
          Home
        </a>
        <a href="#" className="text-blue-600 font-medium">
          Property
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Contact
        </a>
      </div>

      {/* Call to Action Button */}
      <button className="relative z-10 bg-gradient-to-r cursor-pointer from-blue-600 to-blue-800 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-medium shadow-lg text-sm sm:text-base hover:brightness-110 transition-all">
        Become an Agent
      </button>
    </section>
  );
};

export default HeroSection;
