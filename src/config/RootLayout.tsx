import React from 'react';

interface IRootLayoutProps {
   children: React.ReactNode;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
   return <div className="bg-dark min-h-screen text-white">{children}</div>;
};

export default RootLayout;
