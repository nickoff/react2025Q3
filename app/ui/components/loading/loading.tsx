'use client';

import './loading.css';

export const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-48 mb-65 justify-center w-full">
      <div className="flex gap-2">
        <div className="w-2 bg-orange-600 rounded-2xl wave h-6" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 bg-orange-600 rounded-2xl wave h-6" style={{ animationDelay: '100ms' }}></div>
        <div className="w-2 bg-orange-600 rounded-2xl wave h-6" style={{ animationDelay: '200ms' }}></div>
        <div className="w-2 bg-orange-600 rounded-2xl wave h-6" style={{ animationDelay: '300ms' }}></div>
        <div className="w-2 bg-orange-600 rounded-2xl wave h-6" style={{ animationDelay: '400ms' }}></div>
        <div className="w-2 bg-orange-600 rounded-2xl wave h-6" style={{ animationDelay: '500ms' }}></div>
      </div>
      <p className="text-2xl font-bold">LOADING</p>
    </div>
  );
};
