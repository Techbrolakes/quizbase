import React from 'react';
import Lottie from 'lottie-react';
import QuizLogo from '@/assets/animations/quizlogo.json';
import { Button } from '@/baseui/ui/button';
import SCREEN_TEXTS from './constants';

const { GAME_RULES } = SCREEN_TEXTS;

const Intro: React.FC = () => {
   return (
      <div className="flex flex-col justify-center items-center min-h-screen font-charm ">
         <section className="bg-slate-800 bg-opacity-30 w-[85vw] lg:w-[50vw] py-8 px-5 rounded-md">
            <article className=" space-y-10">
               <div className="space-y-6">
                  <Lottie animationData={QuizLogo} className="w-1/6 mx-auto" />
                  <h1 className="font-bold text-5xl text-center font-charm">Quizbase</h1>
               </div>

               <div className="w-5/6 lg:w-3/4 mx-auto">
                  {GAME_RULES.map((rule, i) => (
                     <ul key={i} className="list-disc">
                        <li className="my-6 text-sm lg:text-base font-medium tracking-wide leading-relaxed font-cabin">{rule}</li>
                     </ul>
                  ))}
                  <Button className="mx-auto px-12 bg-blue-900 hover:bg-blue-800 transition-all duration-200 ease-linear hover:scale-105 hover:-rotate-2 font-cabin font-bold text-base block">
                     Start Quiz
                  </Button>
               </div>
            </article>
         </section>
      </div>
   );
};

export default Intro;
