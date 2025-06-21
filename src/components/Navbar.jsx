import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

export const Navbar = () => {
  const navImages = {
    "/": { src: "/images/wave.svg", width: "w-30" },
    "/intro": { src: "/images/think.svg", width: "w-24" },
    "/academics": { src: "/images/gg.svg", width: "w-21" },
    "/project": { src: "/images/idea.svg", width: "w-30" },
  };
  const location = useLocation();
  const { src: navImageSrc, width: navImageWidth } = navImages[
    location.pathname
  ] || {
    src: "/images/default.svg",
    width: "w-20",
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="p-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container nav-font mx-auto flex justify-between items-center"
      >
        {/* logo */}
        <div className="w-full md:w-1/3 text-center lg:text-start">
          <motion.h3
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }}
            className="text-lg text-center md:text-2xl"
          >
            Yogesh Rajak
          </motion.h3>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl focus:outline-none"
          >
            ☰
          </button>
        </div>
        {/* Nav Links */}
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-3 text-lg md:text-xl absolute md:static top-16 left-0 w-full md:w-auto 
  bg-white/5 backdrop-blur-md rounded-b-xl md:bg-transparent px-4 py-2 md:p-0 shadow-md md:shadow-none z-50`}
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mb-1 md:mb-0"
          >
            <NavLink
              className={`block w-[60%] md:w-full px-2 py-1 rounded-md transition-all ${
                location.pathname === "/" ? "bg-black/5 backdrop-blur-sm " : ""
              }`}
              to="/"
            >
              Home
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mb-1 md:mb-0"
          >
            <NavLink
              className={`block w-[60%] md:w-full px-2 py-1 rounded-md transition-all ${
                location.pathname === "/intro"
                  ? "bg-black/5 backdrop-blur-sm "
                  : ""
              }`}
              to="/intro"
            >
              Intro
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mb-1 md:mb-0"
          >
            <NavLink
              className={`block w-[60%] md:w-full px-2 py-1 rounded-md transition-all ${
                location.pathname === "/academics"
                  ? "bg-black/5 backdrop-blur-sm "
                  : ""
              }`}
              to="/academics"
            >
              Academics
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mb-1 md:mb-0"
          >
            <NavLink
              className={`block w-[60%] md:w-full px-2 py-1 rounded-md transition-all ${
                location.pathname === "/project"
                  ? "bg-black/5 backdrop-blur-sm "
                  : ""
              }`}
              to="/project"
            >
              Projects
            </NavLink>
          </motion.li>
          <div className="absolute top-2 right-3 z-0 block md:hidden">
            {/* nav image */}
            <motion.img
              key={location.pathname} // 🔑 This re-renders the image on every route change
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
              src={navImageSrc}
              alt="illustration"
              className={`${navImageWidth} h-auto object-contain rounded-md`}
            />
          </div>
        </motion.ul>
      </motion.div>
    </nav>
  );
};
