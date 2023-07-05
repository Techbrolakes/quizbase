import React from 'react';
import RootLayout from '@/config/RootLayout';
import Intro from '@/components/Intro';

const Homepage: React.FC = () => {
   return (
      <RootLayout>
         <Intro />
      </RootLayout>
   );
};

export default Homepage;
