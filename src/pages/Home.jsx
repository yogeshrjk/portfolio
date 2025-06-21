import { useBgColor } from "../context/BgColorContext";
import Contact from "../components/Contact";
import { motion } from "framer-motion";

export default function Home() {
const bgColor = useBgColor();
  return (
    <>
      {/* Show this only on small screens */}

      <div className=" grid grid-rows-[auto_auto] lg:grid-rows-1 lg:grid-cols-2 h-[calc(100vh-64px)] w-full">
        {/* Image */}
        <div className="hidden lg:flex mx-auto order-2 lg:order-1 mt-40 md:mt-10">
          <motion.img
            whileHover={{
              rotate: [0, 1.5, -2, 1.5, 0],
              transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            }}
            src="/images/wave.svg"
            alt="illustration"
            className="w-3xs lg:w-md h-auto object-contain opacity-80"
          />
        </div>

        {/* text */}
        <div className="flex flex-col justify-center items-center lg:items-start p-4 mt-20 md:mt-0 lg:mb-20 gap-1 mx:auto order-1 md:order-2 select-none">
          <div className="flex flex-col justify-center items-center lg:items-start md:w-lg">
            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl mb-1 text-black text-center lg:text-left flex flex-wrap justify-center lg:justify-start">
  {"Hello, I'm Yogesh".split(" ").map((word, i) => (
    <motion.span
      key={i}
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: i * 0.1 }}
      className="inline-block mr-2"
    >
      {word}
    </motion.span>
  ))}
</h1>
           <p className="text-sm sm:text-lg md:text-md lg:text-lg px-5 md:px-0 text-gray-800 text-center md:text-start max-w-2xl mx-auto">
  {"A curious mind crafting user-friendly interfaces and learning something new every day."
    .split(" ")
    .map((word, i) => (
      <motion.span
        key={i}
        initial={{ y: -3, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 5,
          delay: i * 0.1,
          ease: "easeInOut",
        }}
        className="inline-block mr-1"
      >
        {word}
      </motion.span>
    ))}
</p>
          </div>

          <div className="space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className= "border-2 border-black rounded-sm bg-gray-900 px-1 text-sm md:text-md lg:text-lg"
              style={{ color: bgColor }}
            >
              Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 rounded-sm text-black px-1 text-sm md:text-md lg:text-lg"
            >
              Hire me
            </motion.button>
          </div>
        </div>
      </div>
      <div className="z-10">
        <Contact />
      </div>
    </>
  );
}
