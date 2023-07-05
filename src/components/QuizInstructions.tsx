import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/baseui/ui/button';
import useQuizStore from '@/config/store';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/baseui/ui/select';

const QuizInstructions: React.FC = () => {
   const { setCurrentView } = useQuizStore();

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
         <div className="flex  flex-col items-center justify-center h-screen">
            <section className="bg-slate-800 relative bg-opacity-30 w-[95vw] lg:w-[50vw] py-8 px-2 lg:px-5 rounded-md ">
               <Button
                  onClick={() => setCurrentView(0)}
                  className="mx-auto -top-6 left-0 absolute px-12 mt-6 bg-blue-900 hover:bg-blue-800 transition-all duration-200 ease-linear hover:scale-105 hover:-rotate-2 font-cabin font-bold text-base block"
               >
                  Back
               </Button>
               <article className="space-y-12">
                  <h1 className="font-bold text-5xl text-center font-cabin">Set Quiz Settings</h1>

                  <Select>
                     <SelectTrigger className="bg-dark border-none focus:outline-none font-charm">
                        <SelectValue placeholder="Select Number Of Questions" />
                     </SelectTrigger>
                     <SelectContent className="">
                        <SelectItem value="light">10</SelectItem>
                        <SelectItem value="dark">20</SelectItem>
                        <SelectItem value="system">40</SelectItem>
                     </SelectContent>
                  </Select>

                  <Select>
                     <SelectTrigger className="bg-dark border-none">
                        <SelectValue placeholder="Select Category" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                     </SelectContent>
                  </Select>

                  <Select>
                     <SelectTrigger className="bg-dark border-none">
                        <SelectValue placeholder="Select Difficuty" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectItem value="light">Easy</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                     </SelectContent>
                  </Select>

                  <Button className="mx-auto px-12 mt-6 bg-blue-900 hover:bg-blue-800 transition-all duration-200 ease-linear hover:scale-105 hover:-rotate-2 font-cabin font-bold text-base block">
                     Start Quiz
                  </Button>
               </article>
            </section>
         </div>
      </motion.div>
   );
};

export default QuizInstructions;
