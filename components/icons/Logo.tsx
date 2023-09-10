"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface AnimatedSVGProps {
  className?: string;
}

const LogoSVG: React.FC<AnimatedSVGProps> = ({ className }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      pathLength: [0, 1],
      transition: { duration: 2 },
    });
  }, [controls]);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 65 40"
      width="65"
      height="40"
      className={className}
    >
      <motion.path
        d="M43.2072 0L32.4211 7.88354L21.626 0L0 15.794V40H12.551V34.6876H5.31243V18.4994L21.626 6.58455L27.9059 11.1713L21.5722 15.794V40H30.1008H36.6853H43.252V15.794L36.9183 11.1713L43.1982 6.58455L59.5118 18.4994V34.6876H51.6909V40H64.8421V15.794L43.2072 0ZM37.9395 18.4994V34.6876H36.6943H30.1097H26.8936V18.4994L32.4121 14.4681L37.9395 18.4994Z"
        fill="#091638"
        initial={{ pathLength: 0 }}
        animate={controls}
      />
    </motion.svg>
  );
};

export default LogoSVG;
