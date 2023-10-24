import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I learned so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Skills
        </h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-[80%] h-[80%] object-contain'
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
