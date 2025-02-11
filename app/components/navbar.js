'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white py-4 w-full top-0 z-10 font-open-sans font-medium">
      <div className="layout-container flex justify-between items-center px-4">
        <div className="flex gap-2 items-center">
          <div className="w-5 rounded overflow-hidden">
            <video className="w-full h-auto" autoPlay loop muted playsInline>
              <source src="/videos/navbar-emoji.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Link href="/" className="text-small font-medium text-gray-900">
            Sarita Evans
          </Link>
        </div>
        <ul className="flex gap-4 lg:gap-6 text-sm lg:text-base">
          <li>
            {isHomePage ? (
              <button
                onClick={() => handleScroll('selected-work')}
                className="hover:text-[#F375A3] transition-colors"
              >
                Work
              </button>
            ) : (
              <Link
                href="/#selected-work"
                className="hover:text-[#F375A3] transition-colors"
              >
                Work
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <button
                onClick={() => handleScroll('about-me')}
                className="hover:text-[#F375A3] transition-colors"
              >
                About me
              </button>
            ) : (
              <Link
                href="/#about-me"
                className="hover:text-[#F375A3] transition-colors"
              >
                About me
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
