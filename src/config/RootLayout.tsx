import React from 'react';
import { AnimatePresence } from 'framer-motion';

interface IRootLayoutProps {
   children: React.ReactNode;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
   return (
      <div className="bg-dark min-h-screen text-white">
         <AnimatePresence mode="wait">{children}</AnimatePresence>
      </div>
   );
};

export default RootLayout;
