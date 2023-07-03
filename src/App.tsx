import React from 'react';
import { Button } from './baseui/ui/button';

const App: React.FC = () => {
   return (
      <div>
         <h1 className="text-8xl font-bold">Hello world!</h1>
         <Button>Click me</Button>
      </div>
   );
};

export default App;
