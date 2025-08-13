// PreloaderLetter.jsx
import React from "react";
import { motion } from "framer-motion";
import colors from "../data/colors";

const PreloaderLetter = () => {
  return (
    <motion.div
      style={{
        position: "fixed", // фиксируем поверх всего
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        background: colors.backgroundTemplate.background,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        zIndex: 9999, // чтобы точно был сверху
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.span
        style={{
          color: "white",
          fontSize: "10rem",
          fontWeight: "bold",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Ф
      </motion.span>
    </motion.div>
  );
};

export default PreloaderLetter;
