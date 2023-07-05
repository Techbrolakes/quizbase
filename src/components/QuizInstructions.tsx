import React from 'react';
import { motion } from 'framer-motion';

const QuizInstructions: React.FC = () => {
   return (
      <motion.div
         variants={{
            initial: {
               background: '#1E40AF',
               clipPath: 'circle(0% at 50% 50%)',
            },
            animate: {
               background: '#09090B',
               clipPath: 'circle(100% at 50% 50%)',
            },
         }}
         className="w-full h-full min-h-screen flex justify-center items-center px-5 py-8"
         initial="initial"
         animate="animate"
         exit="exit"
         transition={{ duration: 0.5 }}
      >
         QuizInstructions
      </motion.div>
   );
};

export default QuizInstructions;
