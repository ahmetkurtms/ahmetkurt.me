"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaDownload, FaSpinner } from "react-icons/fa";

const Resume = () => {
  // Path to your CV file in the public folder
  const cvPath = "/Assets/cv-example.pdf";

  // State for loading and error
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Handle PDF load
  const handleLoad = () => {
    setIsLoading(false);
    setError(false);
  };

  // Handle PDF error
  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6 text-center">
          My Resume
        </h1>
        <p className="text-xl mb-12 text-gray-300">
          You can view or download my CV below.
        </p>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="flex justify-center items-center h-[calc(100vh-200px)]">
            <FaSpinner className="animate-spin text-4xl text-green-500 glow-green rounded-full" />
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="flex justify-center items-center h-[calc(100vh-200px)]">
            <p className="text-red-500 text-xl glow-red">
              Failed to load the PDF. Please try again later.
            </p>
          </div>
        )}

        {/* PDF Viewer */}
        {!error && (
          <div className="relative w-full h-[calc(100vh-200px)]">
            <iframe
              src={cvPath}
              width="100%"
              height="100%"
              className="border-2 border-green-500/50 rounded-lg shadow-lg glow-green"
              title="Resume"
              onLoad={handleLoad}
              onError={handleError}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Resume;
