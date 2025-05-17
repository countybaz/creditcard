
import React from 'react';
import { CreditCard } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-50 to-gray-50 border-b border-gray-200 py-5 px-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-2">
            <div className="bg-stimulus-blue rounded-full p-2 mr-3">
              <CreditCard className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center font-sans text-gray-800 tracking-tight">
              GET APPROVED FOR A <span className="text-stimulus-green font-black">$1,000</span> CREDIT LINE TODAY
            </h1>
          </div>
          
          <p className="text-sm sm:text-base mt-1 text-center max-w-xl text-gray-600">
            Helping eligible applicants access funds for purchases, bills, and everyday expenses
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
