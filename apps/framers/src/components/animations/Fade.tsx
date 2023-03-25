import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface FadeProps {
  children: ReactNode;
}
const Fade = ({ children }: FadeProps) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-10"
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Fade;
