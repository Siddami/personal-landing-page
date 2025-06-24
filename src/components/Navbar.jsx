import { useState } from "react";
import { motion as Motion } from "framer-motion";

const navItems = [
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Let’s connect", id: "contact" },
];

function Navbar() {
  const [active, setActive] = useState("about");

  return (
    <nav className="absolute top-8 w-full flex justify-center z-20">
      <ul className="flex gap-4 bg-gray-900 backdrop-blur-sm px-6 py-4 rounded-full text-base md:text-xl font-medium shadow-md">
        {navItems.map((item) => {
          const isActive = active === item.id;

          return (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className="px-6 py-4 rounded-full transition-colors duration-300 text-white hover:text-gray-300"
              >
                {item.label}
              </a>

              {/* Active background highlight */}
              {isActive && item.id !== "contact" && (
                <Motion.div
                  layoutId="nav-highlight"
                  className="absolute inset-0 bg-white/20 rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;