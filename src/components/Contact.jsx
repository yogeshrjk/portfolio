import { motion } from "framer-motion";

export default function Contact() {
  const contactItems = [
    { src: "/images/mail.svg", tooltip: "Email", link: "mailto:yogeshrjk4@gmail.com" },
    { src: "/images/linkedin.svg", tooltip: "LinkedIn", link: "https://linkedin.com/in/yogesh-rajak-04" },
    { src: "/images/github.svg", tooltip: "GitHub", link: "https://github.com/yogeshrjk" },
    { src: "/images/x.svg", tooltip: "X", link: "https://x.com/Yogesh_rjk" },
  ];

  return (
    <div className="absolute bottom-0 right-0 p-4 flex flex-col items-center z-10">
      <ul className="flex flex-col items-center space-y-2">
        {contactItems.map((item, index) => (
          <li key={index} className="relative group">
          <a href={item.link}>
            {/* Tooltip */}
            <motion.div
  className="hidden group-hover:flex absolute right-[140%] top-1/2 -translate-y-1/2 bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20"
  initial={{ opacity: 0, x: 10 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.2 }}
>
  {item.tooltip}
</motion.div>

            {/* Icon */}
            <motion.img
              src={item.src}
              className="w-[25px] h-auto cursor-pointer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}