import Contact from "../components/Contact";
import { motion } from "framer-motion";

export default function Project() {
  const projects = [
    {
      imgSrc: "/images/mycampus.png",
      name: "College Management web app",
      live: "https://my-campus.live",
      github: "https://github.com/yogeshrjk/college-management-system",
      desc: "MyCampus is a comprehensive college management web application designed to simplify and centralize student data handling, including notices, events, and resource sharing.",
    },
    {
      imgSrc: "/images/pingpong.png",
      name: "Ping Pong Game",
      live: "https://yogeshrjk.github.io/pingpong/",
      github: "https://github.com/yogeshrjk/pingpong",
      desc: "Ping Pong is a two-player browser-based game built using HTML, CSS, and JavaScript. It simulates the classic Pong arcade game, offering fast-paced paddle control and score tracking.",
    },
    {
      imgSrc: "/images/typing.png",
      name: "Typing Speed Tester",
      live: "https://yogeshrjk.github.io/TypingSpeed/",
      github: "https://github.com/yogeshrjk/TypingSpeed",
      desc: "Typing Speed Tester is a web tool that helps users measure and improve their typing speed and accuracy in real-time. It provides instant feedback and error detection.",
    },
    {
      imgSrc: "/images/trex.png",
      name: "T-Rex Game",
      live: "https://yogeshrjk.github.io/T-rex-Game/",
      github: "https://github.com/yogeshrjk/T-rex-Game",
      desc: "T-Rex Game is a clone of the iconic Chrome offline runner game, developed using HTML5 Canvas. It features responsive controls and dynamic difficulty scaling.",
    },
    {
      imgSrc: "/images/gif.png",
      name: "GIF Search App",
      live: "https://favgifsearch.netlify.app/",
      github: "https://github.com/yogeshrjk/gif-search",
      desc: "GIF Search App allows users to search, browse, and view trending and relevant GIFs powered by the Giphy and Tenor API. It includes keyword-based filtering and responsive design.",
    },
    {
      imgSrc: "/images/color.png",
      name: "Color Picker",
      live: "https://color0picker.netlify.app/",
      github: "https://github.com/yogeshrjk/ColourPiker",
      desc: "Color Picker is a sleek utility tool that lets users explore and select colors, copy their hex codes, and track recent choices for design or development use.",
    },
  ];
  return (
    <>
      <div className="grid grid-rows-[auto_auto] lg:grid-rows-1 lg:grid-cols-2 h-[calc(100vh-64px)] p-4 w-full">
        {/* Image */}
        <div className="hidden lg:flex mx-auto mt-40 sm:mt-10">
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
        <div className="flex flex-col gap-3 p-4 mb-5 w-full overflow-y-auto max-h-[calc(100vh-64px)] scrollbar-hide pr-3">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/30 md:mr-10 flex flex-col md:flex-row items-center gap-5 backdrop-blur-sm shadow-md rounded-lg p-4 border my-auto border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="md:w-120 md:h-30 flex bg-white p-1 border border-gray-300 rounded-sm">
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
