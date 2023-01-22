import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-white flex items-center h-[70px] px-2 sm:px-4 py-2.5">
    <div className="container flex items-center justify-between mx-auto">
      <Link href="/" className="flex items-center">
        <img src="/images/dog-icon.svg" className="h-6 mr-3 sm:h-9" alt="Dog Breeds Logo" />
        <span className="self-center text-2xl font-bold whitespace-nowrap">Dog Breeds</span>
      </Link>
    </div>
  </nav>
);

export default Navbar;
