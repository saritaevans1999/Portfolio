const Navbar = () => (
  <nav className="bg-white py-4 w-full top-0 z-10">
    <div className="w-full w-[1120px] mx-auto flex justify-between items-center px-4">
      <a href="/" className="text-small font-medium text-gray-900">Sarita Evans</a>
      <ul className="hidden lg:flex gap-6">
        <li><a href="/case-study-1" className="hover:text-blue-600">Work</a></li>
        <li><a href="/case-study-2" className="hover:text-blue-600">About me</a></li>
      </ul>
      <button className="lg:hidden">☰</button>
    </div>
  </nav>
);

export default Navbar;