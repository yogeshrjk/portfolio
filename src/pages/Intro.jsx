import Contact from "../components/Contact";
import { motion } from "framer-motion";

export default function Intro() {
  const techStack = [
    {
      label: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      label: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    { label: "Tailwind", isSvg: true },
    {
      label: "Bootstrap",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      label: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },

    {
      label: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      label: "Node.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      label: "Express",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },

    {
      label: "Next.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      label: "C++",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      label: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];
  return (
    <>
      <div className=" grid grid-rows-[auto_auto] lg:grid-rows-1 lg:grid-cols-2 h-[calc(100vh-64px)] p-4 w-full">
        {/* Image */}
        <div className="hidden lg:flex mx-auto mt-40 sm:mt-10">
          <motion.img
            whileHover={{
              rotate: [0, 1.5, -2, 1.5, 0],
              transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            }}
            src="/images/think.svg"
            alt="illustration"
            className="w-3xs lg:w-sm h-auto object-contain opacity-80"
          />
        </div>

        {/* text */}
        <div className="flex flex-col justify-center items-start p-4 mx-auto lg:mx-0 select-none">
          <div className="flex flex-col justify-center items-start sm:w-sm md:w-md lg:w-lg ">
            <h3
              className="text-lg"
              style={{ fontFamily: "poppins", fontWeight: 500 }}
            >
              Hello!
            </h3>
            <h5
              className="text-lg"
              style={{ fontFamily: "poppins", fontWeight: 500 }}
            >
              I'm Yogesh Rajak.
            </h5>
            {/* Show this only on small screens */}
            <p
              className="text-xs lg:text-sm text-justify w-full py-2"
              style={{ fontFamily: "poppins", fontWeight: 500 }}
            >
              I’m a passionate fontend developer with a B.Tech in Information
              Technology and 1.5 years of hands-on experience working at a
              startup, where I primarily focused on frontend development. During
              this time, I honed my skills in building responsive and
              user-friendly interfaces using technologies like JavaScript and
              React, while also drawing on my solid foundation in MERN Fullstack
              development.
              <br />
              <br />
              My journey in tech is fueled by curiosity and a commitment to
              continuous learning. Beyond personal projects, I’m actively
              exploring opportunities to collaborate on open-source initiatives,
              where I believe shared knowledge and teamwork can drive real
              innovation.
              <br />
              <br />
              Thank you for visiting my portfolio. I’m excited about the
              possibility of working together and contributing to meaningful
              projects within the tech community.
            </p>
          </div>
          <h4 className="text-sm mb-5">I am familiar with:</h4>
          <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4 text-xs text-center">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                {tech.isSvg ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 36"
                    fill="currentColor"
                    className="w-6 sm:w-7 md:w-8 fill-sky-400"
                  >
                    <path d="M17.183 0C12.6 0 9.737 2.291 8.59 6.873c1.719-2.29 3.723-3.15 6.014-2.577 1.307.326 2.242 1.274 3.275 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.291 8.591-6.872-1.718 2.29-3.723 3.15-6.013 2.576-1.308-.326-2.243-1.274-3.276-2.324C23.39 1.98 21.44 0 17.183 0ZM8.59 10.309C4.01 10.309 1.145 12.6 0 17.182c1.718-2.291 3.723-3.15 6.013-2.577 1.308.326 2.243 1.274 3.276 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.29 8.59-6.872-1.718 2.29-3.722 3.15-6.013 2.577-1.307-.327-2.242-1.276-3.276-2.325-1.684-1.71-3.634-3.689-7.893-3.689Z" />
                  </svg>
                ) : (
                  <img
                    src={tech.src}
                    alt={tech.label}
                    className="w-6 sm:w-7 md:w-8 h-auto"
                  />
                )}
                <span className="mt-1">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-0 right-0 z-10 hidden md:block">
        <Contact />
      </div>
    </>
  );
}
