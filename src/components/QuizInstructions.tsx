import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/baseui/ui/dialog';
import { Button } from '@/baseui/ui/button';

const QuizInstructions: React.FC = () => {
   return (
      <div>
         <Dialog>
            <DialogTrigger asChild>
               <Button className="mx-auto px-12 mt-6 bg-blue-900 hover:bg-blue-800 transition-all duration-200 ease-linear hover:scale-105 hover:-rotate-2 font-cabin font-bold text-base block">
                  Start Quiz
               </Button>
            </DialogTrigger>

            <DialogContent className="bg-dark text-white">
               <DialogHeader>
                  <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                  <DialogDescription className="text-white">
                     This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                  </DialogDescription>
               </DialogHeader>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default QuizInstructions;
