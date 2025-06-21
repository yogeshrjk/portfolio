import Contact from "../components/Contact";
import { motion } from "framer-motion";

export default function Academics() {
  return (
    <>
      <div className=" grid grid-rows-[auto_auto] lg:grid-rows-1 lg:grid-cols-2 h-[calc(100vh-64px)] p-4 w-full">
        {/* Hero Image */}
        <div className="hidden lg:flex mx-auto mt-40 sm:mt-10">
          <motion.img
            whileHover={{
              rotate: [0, 1.5, -2, 1.5, 0],
              transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            }}
            src="/images/gg.svg"
            alt="illustration"
            className="w-3xs lg:w-xs h-auto object-contain opacity-80"
          />
        </div>

        {/* Hero text */}
        <div className="flex flex-col justify-center items-start sm:w-sm md:w-md lg:w-lg p-4 mx-auto lg:mx-0 select-none p2 poppins-override">
          <h4 className="text-lg lg:text-xl">Education</h4>

          <div>
            <h5 className="text-sm lg:text-md font-medium">
              B.Tech. (Information Technology)
            </h5>
            <h6 className="text-xs lg:text-md text-gray-700">
              Shri Shankaracharya Institute of Professional Management and
              Technology, Raipur, Chhattisgarh
            </h6>
            <span className="text-xs lg:text-md text-gray-500">2017-2021</span>
          </div>

          <div>
            <h5 className="text-sm lg:text-md font-medium">12th</h5>
            <h6 className="text-xs lg:text-md text-gray-700">
              Higher Secondary School Jamgaon, Dist. Kanker, Chhattisgarh
            </h6>
            <span className="text-xs lg:text-md text-gray-500">2016-2017</span>
          </div>

          <hr className="my-4 w-full border-gray-400" />

          <div className="skills space-y-1">
            <h4 className="text-lg lg:text-xl">Experience</h4>
            <h5 className="text-sm lg:text-md font-medium">
              Front-end Developer | Tech36garh
            </h5>
            <span className="text-xs lg:text-md text-gray-500">
              October 2022 - june 2024 (1.8 years)
            </span>
            <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
              <li>Developed responsive UIs using React.js, JavaScript, and Bootstrap.</li>
                <li>Improved site performance by 30%, reducing load times significantly.</li>
                <li>Fixed 50+ frontend bugs, enhancing UX and UI responsiveness.</li>
                <li>Integrated APIs and optimized components with lazy loading.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-0 right-0 z-10 hidden md:block">
        <Contact />
      </div>
    </>
  );
}
