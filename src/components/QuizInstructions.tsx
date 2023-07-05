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
         initial="initial"
         className="min-h-screen"
         animate="animate"
         exit="exit"
         transition={{ duration: 0.5 }}
      >
         <div className="flex flex-col items-center justify-center lg:justify-start font-charm pt-4">
            <section className="bg-slate-800 bg-opacity-30 w-[95vw] lg:w-[50vw] py-8 px-2 lg:px-5 rounded-md">fjkfja</section>
         </div>
      </motion.div>
   );
};

export default QuizInstructions;
