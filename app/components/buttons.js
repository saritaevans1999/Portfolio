'use client';

export const PrimaryButton = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`w-full lg:w-auto px-[16px] py-[8px] bg-[#212121] text-white text-base font-medium rounded-full hover:bg-[#414141] transition duration-200 ${className}`}
  >
    {children}
  </button>
);

export const SecondaryButton = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`px-[16px] py-[8px] border-[0.5px] border-[#212121] text-gray-700 font-medium rounded-[99px] hover:bg-[#F1F0EC] transition duration-200 ${className}`}
  >
    {children}
  </button>
);

export const AccentLink = ({ href, children, className = '' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-[#EA4C89] underline hover:opacity-90 transition-opacity ${className}`}
  >
    {children}
  </a>
);
