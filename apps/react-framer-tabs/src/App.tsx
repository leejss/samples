import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Tabs from "./Tabs";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const App = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="bg:hsla(12,30%,5%) min-h:100vh flex justify-content:center align-items:center flex-direction:column">
      <Tabs
        index={index}
        onTab={(idx) => {
          setIndex(idx);
        }}
      />
      {/* TODO: AnimatePresence */}
      <AnimatePresence>
        {index === 0 && (
          <motion.h1 key="home" variants={variants} initial="initial" animate="animate" exit="exit" className="color:white">
            Home
          </motion.h1>
        )}
        {index === 1 && (
          <motion.h1 key="exchange" initial="initial" animate="animate" exit="exit" className="color:white">
            Exchange
          </motion.h1>
        )}
        {index === 2 && (
          <motion.h1 key="store" initial="initial" animate="animate" exit="exit" className="color:white">
            Store
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
