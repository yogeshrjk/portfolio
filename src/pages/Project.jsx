import Contact from "../components/Contact";
import { motion } from "framer-motion";

export default function Project() {
  const projects = [
    {
      name: "Ping Pong Game",
      live: "https://yogeshrjk.github.io/pingpong/",
      github: "https://github.com/yogeshrjk/pingpong",
      desc: "A simple 2-player Pong game built with HTML, CSS, and JavaScript.",
    },
    {
      name: "Typing Speed Tester",
      live: "https://yogeshrjk.github.io/TypingSpeed/",
      github: "https://github.com/yogeshrjk/TypingSpeed",
      desc: "Measures your typing speed and accuracy in real-time.",
    },
    {
      name: "T-Rex Game",
      live: "https://yogeshrjk.github.io/T-rex-Game/",
      github: "https://github.com/yogeshrjk/T-rex-Game",
      desc: "A clone of the Chrome T-Rex runner game using canvas.",
    },
    {
      name: "GIF Search App",
      live: "https://favgifsearch.netlify.app/",
      github: "https://github.com/yogeshrjk/gif-search",
      desc: "Search and display trending GIFs using Giphy API.",
    },
    {
      name: "Color Picker",
      live: "https://color0picker.netlify.app/",
      github: "https://github.com/yogeshrjk/ColourPiker",
      desc: "Pick colors, copy hex codes, and explore recent selections.",
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
        <div
          className="grid gap-6 grid-cols-1 md:grid-cols-2 p-4 
  overflow-y-auto max-h-[calc(100vh-64px)] 
  scrollbar-hide pr-3"
        >
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/30 backdrop-blur-sm shadow-md rounded-lg p-4 border my-auto border-gray-200 hover:shadow-xl transition-all duration-300">
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
