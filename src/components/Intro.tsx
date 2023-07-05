import React from 'react';
import Lottie from 'lottie-react';
import QuizLogo from '@/assets/animations/quizlogo.json';
import { Button } from '@/baseui/ui/button';
import { motion } from 'framer-motion';

const Intro: React.FC = () => {
   return (
      <motion.div
         key={'countdown'}
         variants={{
            initial: {
               background: '#413FC3',
               clipPath: 'circle(0% at 50% 50%)',
            },
            animate: {
               background: '#09090B',
               clipPath: 'circle(100% at 50% 50%)',
            },
         }}
         initial="initial"
         animate="animate"
         exit="exit"
         transition={{ duration: 0.5 }}
         className="flex flex-col justify-center items-center min-h-screen font-charm "
      >
         <section className="bg-slate-800 bg-opacity-30 h-[90vh] w-[85vw] lg:w-[50vw] p-5 rounded-md">
            <article className="text-center space-y-10">
               <Lottie animationData={QuizLogo} className="w-1/6 mx-auto" />
               <h1 className="font-bold text-5xl font-charm">Quizbase</h1>
               <h5 className="text-base font-medium">How to play the game</h5>
               <Button>Start</Button>
            </article>
         </section>
      </motion.div>
   );
};

export default Intro;
