
import React from 'react';
import Header from '@/components/Header';
import StimulusForm from '@/components/StimulusForm';
import { NotificationToast } from '@/components/NotificationToast'; // Changed from default to named import
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <StimulusForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
