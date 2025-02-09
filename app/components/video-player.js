import React from 'react';
import { IoClose } from 'react-icons/io5';

const VideoPlayer = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-full md:w-4/5 max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full relative">
          <video className="w-full h-auto" controls autoPlay>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 bg-white rounded-full z-10 w-10 h-10 flex justify-center items-center"
          onClick={onClose}
        >
          <IoClose className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
