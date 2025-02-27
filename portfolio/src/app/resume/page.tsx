'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaDownload, FaSpinner, FaEye } from 'react-icons/fa';

const Resume = () => {
  // Path to your CV file in the public folder
  const cvPath = '/Assets/cv-example.pdf';

  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <main className='min-h-screen bg-black text-white'>
      <div className='container mx-auto px-4 py-16 text-center'>
        <h1 className='text-4xl font-bold mb-6 text-center'>My Resume</h1>
        <p className='text-xl mb-6 text-gray-300'>
          You can view or download my CV below.
        </p>

        {/* Action Buttons */}
        <div className='flex flex-col md:flex-row gap-4 justify-center mb-8'>
          <Button
            onClick={() => window.open(cvPath, '_blank')}
            className='w-full md:w-auto bg-zinc-900 border border-green-500/20 hover:border-green-500/50 hover:bg-green-500'
          >
            <FaEye className='mr-2 h-5 w-5' />
            View Full Screen
          </Button>
          <Button
            onClick={() => {
              const link = document.createElement('a');
              link.href = cvPath;
              link.download = 'Ahmet_Kurt_CV.pdf';
              link.click();
            }}
            className='w-full md:w-auto bg-zinc-900 border border-green-500/20 hover:border-green-500/50 hover:bg-green-500'
          >
            <FaDownload className='mr-2 h-5 w-5' />
            Download PDF
          </Button>
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className='flex justify-center items-center h-[calc(100vh-300px)]'>
            <FaSpinner className='animate-spin text-4xl text-green-500 glow-green rounded-full' />
          </div>
        )}

        {/* PDF Viewer */}
        <div className='relative w-full h-[calc(100vh-300px)]'>
          <iframe
            src={cvPath}
            width='100%'
            height='100%'
            className='border-2 border-green-500/20 rounded-lg shadow-lg hover:border-green-500/50 transition-colors duration-300'
            title='Resume'
            onLoad={handleLoad}
          />
        </div>
      </div>
    </main>
  );
};

export default Resume;
