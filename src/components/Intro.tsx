import React from 'react';
import Lottie from 'lottie-react';
import QuizLogo from '@/assets/animations/quizlogo.json';
import SCREEN_TEXTS from './constants';
import { Button } from '@/baseui/ui/button';
import useQuizStore from '@/config/store';

const { GAME_RULES } = SCREEN_TEXTS;

const Intro: React.FC = () => {
   const { setCurrentView } = useQuizStore();

   const handleChangeView = () => {
      return setCurrentView(1);
   };

   return (
      <div className="flex flex-col items-center justify-center lg:justify-start font-charm pt-4">
         <section className="bg-slate-800 bg-opacity-30 w-[95vw] lg:w-[50vw] py-8 px-2 lg:px-5 rounded-md">
            <article className="space-y-12">
               <div className="space-y-6">
                  <Lottie animationData={QuizLogo} className="w-1/4 lg:w-1/6 mx-auto" />
                  <h1 className="font-bold text-5xl text-center font-cabin">Quizbase</h1>
               </div>

               <div className="w-5/6 lg:w-3/4 mx-auto">
                  {GAME_RULES.map((rule, i) => (
                     <ul key={i} className="list-disc">
                        <li className="my-6 text-sm lg:text-base font-medium tracking-wide leading-relaxed font-cabin">{rule}</li>
                     </ul>
                  ))}
                  <Button
                     onClick={() => handleChangeView()}
                     className="mx-auto px-12 mt-6 bg-blue-900 hover:bg-blue-800 transition-all duration-200 ease-linear hover:scale-105 hover:-rotate-2 font-cabin font-bold text-base block"
                  >
                     Start Quiz
                  </Button>
               </div>
            </article>
         </section>
      </div>
   );
};

export default Intro;
