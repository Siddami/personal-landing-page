import { motion as Motion } from "framer-motion";

export default function Loader() {
  return (
    <Motion.div
      className="flex items-center justify-center h-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <Motion.div
        className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        role="status"
        aria-label="Loading site content"
      />
    </Motion.div>
  );
}
