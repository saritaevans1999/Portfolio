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
    <nav className="bg-white py-4 w-full top-0 z-10">
      <div className="layout-container flex justify-between items-center px-4">
        <Link href="/" className="text-small font-medium text-gray-900">Sarita Evans</Link>
        <ul className="hidden lg:flex gap-6">
          <li>
            {isHomePage ? (
              <button onClick={() => handleScroll('selected-work')} className="hover:text-blue-600">
                Work
              </button>
            ) : (
              <Link href="/#selected-work" className="hover:text-blue-600">
                Work
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <button onClick={() => handleScroll('about-me')} className="hover:text-blue-600">
                About me
              </button>
            ) : (
              <Link href="/#about-me" className="hover:text-blue-600">
                About me
              </Link>
            )}
          </li>
        </ul>
        <button className="lg:hidden">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;