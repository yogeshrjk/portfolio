import Contact from "../components/Contact";
import { motion } from "framer-motion";

export default function Project() {
  const projects = [
    {
      imgSrc: "/images/mycampus.png",
      name: "College Management web app",
      live: "https://my-campus.live",
      github: "https://github.com/yogeshrjk/college-management-system",
      desc: "MyCampus is a modern college management system that simplifies student's Data",
    },
    {
      imgSrc: "/images/pingpong.png",
      name: "Ping Pong Game",
      live: "https://yogeshrjk.github.io/pingpong/",
      github: "https://github.com/yogeshrjk/pingpong",
      desc: "A simple 2-player Pong game built with HTML, CSS, and JavaScript.",
    },
    {
      imgSrc: "/images/typing.png",
      name: "Typing Speed Tester",
      live: "https://yogeshrjk.github.io/TypingSpeed/",
      github: "https://github.com/yogeshrjk/TypingSpeed",
      desc: "Measures your typing speed and accuracy in real-time.",
    },
    {
      imgSrc: "/images/trex.png",
      name: "T-Rex Game",
      live: "https://yogeshrjk.github.io/T-rex-Game/",
      github: "https://github.com/yogeshrjk/T-rex-Game",
      desc: "A clone of the Chrome T-Rex runner game using canvas.",
    },
    {
      imgSrc: "/images/gif.png",
      name: "GIF Search App",
      live: "https://favgifsearch.netlify.app/",
      github: "https://github.com/yogeshrjk/gif-search",
      desc: "Search and display trending GIFs using Giphy API.",
    },
    {
      imgSrc: "/images/color.png",
      name: "Color Picker",
      live: "https://color0picker.netlify.app/",
      github: "https://github.com/yogeshrjk/ColourPiker",
      desc: "Pick colors, copy hex codes, and explore recent selections.",
    },
  ];
  return (
    <>
      <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] w-full p-4 gap-4">
        {/* Image */}
        <div className="hidden lg:flex justify-center items-center w-full lg:w-1/2">
          <motion.img
            whileHover={{
              rotate: [0, 1.5, -2, 1.5, 0],
              transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            }}
            src="/images/idea.svg"
            alt="illustration"
            className="w-3xs lg:w-md h-auto object-contain opacity-80"
          />
        </div>

        {/* projects */}
        <div className="flex flex-col gap-3 overflow-y-auto max-h-[calc(100vh-64px)] scrollbar-hide md:pr-12">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/30 flex gap-5 backdrop-blur-sm shadow-md rounded-lg p-4 border my-auto border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-40 h-30 flex bg-white p-1 border border-gray-300 rounded-sm">
                <img
                  src={project.imgSrc}
                  alt="project thumbnail"
                  className="object-cover h-full w-full"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.desc}</p>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-black text-white rounded text-sm"
                  >
                    Live Preview
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 border-2 border-gray-500 text-gray-700 rounded text-sm"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bottom-0 right-0 z-10 hidden md:block">
        <Contact />
      </div>
    </>
  );
}
