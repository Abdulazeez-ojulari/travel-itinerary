export const ImageMotion = () => {
  return {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      scale: [0.5, 1],
      // rotate: [0, 0, 180, 180, 0],
    },
    transition: {
      duration: 1,
      //   type: "spring",
      ease: "easeInOut",
      stiffness: 200,
      times: [0, 0.2, 0.5, 0.8, 1],
      //   repeat: Infinity,
      repeatDelay: 1,
    },
  };
};
export const ImageMotion2 = () => {
  return {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      scale: [0.5, 1],
      //   rotate: [0, 0, 180, 180, 0],
    },
    transition: {
      duration: 1,
      //   type: "spring",
      ease: "easeInOut",
      stiffness: 200,
      times: [0, 0.2, 0.5, 0.8, 1],
      //   repeat: Infinity,
      repeatDelay: 1,
    },
  };
};
export const formMotion = () => {
  return {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
    },
    transition: {
      duration: 1,
      // type: "spring",
      ease: "easeInOut",
      stiffness: 100,
      repeatDelay: 1,
    },
  };
};
