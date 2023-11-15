import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Hello, I'm</motion.h2>
          <motion.h1 variants={textVariants}>Ivan Taetu</motion.h1>
          <motion.h2 variants={textVariants}>
            and I'm <span>FrontEnd</span> Developer
          </motion.h2>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>See my works</motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll"
          />
        </motion.div>
      </div>
      <div className="slidingTextContainer">
        Writer Content Creator Web-Designer
      </div>
      <div className="imageContainer">
        <img src="/bg1.webp" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
