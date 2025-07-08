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
        <div className="flex flex-col justify-center items-start sm:w-sm md:w-md lg:w-lg p-4 mx-auto lg:mx-0 select-none p2">
          <h4 className="text-lg mb-5">Education</h4>

          <div className="mt-1">
            <h5 className="text-base lg:text-lg font-normal">
              B.Tech. (Information Technology)
            </h5>
            <h6 className="text-sm lg:text-base text-gray-700 font-normal">
              Shri Shankaracharya Institute of Professional Management and
              Technology, Raipur, Chhattisgarh
            </h6>
            <p className="text-sm lg:text-base text-gray-500 font-normal">
              2017-2021
            </p>
          </div>

          <div className="mt-3">
            <h5 className="text-base lg:text-lg font-normal">12th</h5>
            <h6 className="text-sm lg:text-base text-gray-700 font-normal">
              Higher Secondary School Jamgaon, Dist. Kanker, Chhattisgarh
            </h6>
            <p className="text-sm lg:text-base text-gray-500 font-normal">
              2016-2017
            </p>
          </div>

          <hr className="my-4 w-full border-gray-400" />

          <div className="skills space-y-1">
            <h4 className="text-lg mb-5">Experience</h4>
            <h5 className="text-base lg:text-lg font-normal">
              Front-end Developer | Tech36garh
            </h5>
            <p className="text-sm lg:text-base text-gray-500 font-normal">
              October 2022 - May 2024 (1.8 years)
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm lg:text-base text-gray-700">
              <li>
                Developed responsive UIs using React.js, JavaScript, and
                Bootstrap.
              </li>
              <li>
                Improved site performance by 30%, reducing load times
                significantly.
              </li>
              <li>
                Fixed 50+ frontend bugs, enhancing UX and UI responsiveness.
              </li>
              <li>
                Integrated APIs and optimized components with lazy loading.
              </li>
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
