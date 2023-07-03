import React from 'react';

interface IProps {
   children: React.ReactNode;
}

const Rootlayout: React.FC<IProps> = ({ children }) => {
   return <div className="bg-dark min-h-screen text-white">{children}</div>;
};

export default Rootlayout;
