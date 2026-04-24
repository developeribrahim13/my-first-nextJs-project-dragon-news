import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-extrabold text-primary animate-pulse">
        404
      </h1>
      
      <div className="mt-4 text-6xl text-gray-400">
        📰 👀
      </div>

      <h2 className="mt-8 text-4xl font-bold text-base-content md:text-5xl">
        পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!
      </h2>
      
      <p className="mt-6 text-lg text-base-content/70 max-w-lg">
        দুঃখিত, আপনি যে খবরটি খুঁজছেন তা সম্ভবত সরিয়ে ফেলা হয়েছে অথবা লিংকটি ভুল। আপনি নিচের বাটনটি ব্যবহার করে আমাদের প্রধান সংবাদ পাতায় ফিরে যেতে পারেন।
      </p>

      <div className="mt-10">
        <Link 
          href="/" 
          className="btn btn-primary btn-lg gap-2 text-white normal-case shadow-lg hover:scale-105 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          প্রধান পাতায় ফিরে যান
        </Link>
      </div>

      <div className="absolute bottom-10 text-sm text-base-content/50">
        The Dragon News | সত্যের সন্ধানে নির্ভীক
      </div>
    </div>
    );
};

export default NotFound;