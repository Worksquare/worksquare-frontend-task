import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export default function NewsletterSignup() {
      useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className="bg-gray-300 py-20"
       data-aos="fade-up"
      data-aos-duration="3000"
    >
      <section className="relative bg-[#007DFE] text-white px-12 py-10 md:py-14 rounded-[3rem] max-w-6xl mx-auto overflow-hidden ">
    
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Text */}
          <div className="md:w-1/2 gilda-display-regular">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Sign up for <br className="hidden md:block" />
              our Newsletter
            </h2>
            <p className="text-sm text-white/90">
              Stay informed about our latest properties at <br />
              <span className="text-white font-medium">
                DreamDwell.Estates
              </span>{" "}
              by subscribing to regular updates directly to your inbox.
            </p>
          </div>

          {/* Right Form */}
          <div className="md:w-1/2 flex flex-col items-center justify-center gap-6">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-6 py-4 rounded-xl border border-white text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white bg-[#007DFE]"
            />
            <button className="bg-white text-[#007DFE] px-10 py-4 cursor-pointer rounded-xl font-medium text-lg hover:bg-blue-50 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
