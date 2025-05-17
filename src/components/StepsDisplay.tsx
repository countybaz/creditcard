
import React from 'react';
import { CheckCircle2, CreditCard, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StepsDisplay = () => {
  const handleCheckEligibility = () => {
    window.open('https://glstrck.com/aff_c?offer_id=2301&aff_id=25969', '_blank');
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto px-4">
      {/* Steps Section */}
      <div className="grid gap-4">
        <h2 className="text-2xl font-bold text-center mb-2">$1,000 Credit Line Approval</h2>
        <p className="text-center text-gray-600 mb-4">Follow these simple steps to check your eligibility</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StepCard number="1" title="Eligibility Check" description="Confirm your qualification for the credit line program" />
          <StepCard number="2" title="Identity Verification" description="Secure verification process to protect your information" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StepCard number="3" title="Application Review" description="Your application is reviewed by our financial team" />
          <StepCard number="4" title="Receive your Credit Line" description="Access to funds for qualified applicants" highlight />
        </div>

        {/* CTA Button directly after steps */}
        <div className="text-center mt-6">
          <button 
            onClick={handleCheckEligibility} 
            className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 bg-stimulus-green hover:bg-stimulus-green/90 text-white font-bold text-xl py-4 px-6 rounded-lg shadow-lg transition-all duration-300"
          >
            CHECK ELIGIBILITY NOW
          </button>
          <p className="text-xs text-gray-500 mt-2">Click to see if you qualify for the $1,000 credit line program</p>
        </div>
      </div>
      
      {/* Security notice at bottom of page */}
      <div className="mt-4 flex justify-center">
        <div className="flex items-center bg-blue-50 px-4 py-2 rounded-md text-sm border border-blue-100 max-w-md">
          <ShieldCheck className="h-4 w-4 mr-2 text-stimulus-blue flex-shrink-0" />
          <span className="text-gray-700">Secure Eligibility Check • Limited Time Offer</span>
        </div>
      </div>
      
      {/* Disclaimer at the very bottom */}
      <div className="text-center mt-2">
        <div className="bg-gray-100 p-3 rounded-lg text-xs text-gray-600 text-center mb-4">
          <ShieldCheck className="h-4 w-4 mx-auto mb-1 text-stimulus-blue" />
          <p>This site is not affiliated with any financial institution. Eligibility for credit programs varies and results are subject to verification.</p>
        </div>
      </div>
    </div>
  );
};

// StepCard component definition
const StepCard = ({
  number,
  title,
  description,
  highlight = false
}: {
  number: string;
  title: string;
  description: string;
  highlight?: boolean;
}) => {
  return (
    <Card className={`transition-all duration-300 ${highlight ? 'border-stimulus-green' : 'border-gray-200'} shadow-sm`}>
      <CardHeader className="flex flex-row items-center gap-2 py-3 px-4">
        <div className={`${highlight ? 'bg-stimulus-green' : 'bg-stimulus-blue'} text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold`}>
          {number}
        </div>
        <div>
          <CardTitle className={`${highlight ? 'text-lg' : 'text-base'}`}>
            {title}
            {highlight && <span className="text-stimulus-green font-bold"> $1,000</span>}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="py-2 px-4">
        <p className="text-gray-600">{description}</p>
        {highlight && (
          <div className="mt-2 flex items-center text-stimulus-green text-sm">
            <CreditCard className="h-4 w-4 mr-1" />
            <span className="font-medium">Credit line available to eligible applicants</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StepsDisplay;
