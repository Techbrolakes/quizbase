import React from 'react';
import RootLayout from '@/config/RootLayout';
import { Button } from '@/baseui/ui/button';

const Homepage: React.FC = () => {
   return (
      <RootLayout>
         <div>
            <h1 className="text-9xl">Hello World</h1>
            <Button>Click me</Button>
         </div>
      </RootLayout>
   );
};

export default Homepage;
