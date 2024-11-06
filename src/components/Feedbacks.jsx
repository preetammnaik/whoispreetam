import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Feedback = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Explore Our Work</p>
          <h2 className={styles.sectionHeadText}>Featured Publication</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        <motion.div
          variants={fadeIn("", "spring", 0, 0.75)}
          className='bg-black-200 p-10 rounded-3xl w-full'
        >
          <h3 className={`${styles.sectionHeadeText} text-white`}>Improving Robustness in Language Models for Legal Textual Entailment Through Artifact-Aware Training</h3>

          <div className='mt-7'>
            <p className='text-secondary text-[16px]'>
              For more detailed insights, check out the publication here:
            </p>
            <a
              href="https://link.springer.com/chapter/10.1007/978-981-97-3076-6_16"
              target="_blank"
              rel="noopener noreferrer"
              className='text-blue-400 hover:underline'
            >
              Read the full chapter.
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedback, "");
