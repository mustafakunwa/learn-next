import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: "-100vw", scale: 0.5 },
  in: { opacity: 1, x: 0, scale: 1 },
  out: { opacity: 0 },
};
const pageTransitions = {
  duration: 0.5,
  type: "spring",
  stiffness: 50,
};

type props = {
  children: React.ReactNode;
};
const MotionTransition = ({ children }: props) => {
  return (
    <motion.div
      exit="out"
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransitions}
    >
      {children}
    </motion.div>
  );
};

export default MotionTransition;
