import React from 'react';
import { styles } from "../styles";
import { motion } from 'framer-motion';

const ConnectWithMe = () => {
  return (
    <motion.div 
      className={`${styles.sectionBackground} p-8 rounded-2xl mt-12`} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <h4 className='text-white font-medium mb-4 text-xl text-center'>Connect with me:</h4>
      <div className='flex justify-center items-center space-x-6'>
        <a 
          href='https://www.linkedin.com/in/preetam-naik-5914aa167/' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='text-secondary text-lg hover:underline'
        >
          LinkedIn
        </a>
        <a 
          href='https://www.instagram.com/preetam__naik/' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='text-secondary text-lg hover:underline'
        >
          Instagram
        </a>
        <a 
          href='/Users/preetamnaik/Desktop/whoispreetam/src/assets/ResumePreetam.pdf' 
          download 
          className='text-secondary text-lg hover:underline'
        >
          Download CV
        </a>
      </div>
    </motion.div>
  );
};

export default ConnectWithMe;
