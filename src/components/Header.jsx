import { motion as Motion } from "framer-motion";
import profileImg from "../assets/sid.png";
import Navbar  from "./Navbar";

function Header() {
  return (
    <header className="relative min-h-screen bg-white text-black dark:bg-gray-300 dark:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <section className="flex flex-col items-center justify-center h-screen px-4 sm:px-6 md:px-10">
        {/* Image */}
        <Motion.img
          src={profileImg}
          alt="Profile"
          className="w-[80vw] sm:w-[60vw] md:w-[40vw] max-w-xs md:max-w-md object-cover z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        />

        {/* Name Text */}
        <div className="w-full max-w-4xl mt-6 text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-[10vw] sm:text-[5vw] md:text-[7vw] leading-none font-bold text-gray-200 dark:text-gray-800"
          >
            siddiqat
          </Motion.h1>
          <Motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-[10vw] sm:text-[5vw] md:text-[7vw] leading-none font-bold text-gray-200 dark:text-gray-800"
          >
            Abdulkareem
          </Motion.h2>
        </div>
      </section>
    </header>
  );
}

export default Header;