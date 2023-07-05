import React from 'react';
import RootLayout from '@/config/RootLayout';
import Intro from '@/components/Intro';
import QuizInstructions from '@/components/QuizInstructions';
import useQuizStore from '@/config/store';

const Homepage: React.FC = () => {
   const { currentView } = useQuizStore();

   const VIEW = [
      {
         value: <Intro />,
      },
      {
         value: <QuizInstructions />,
      },
   ];

   return <RootLayout>{VIEW[currentView].value}</RootLayout>;
};

export default Homepage;
