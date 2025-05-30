"use client";

import Link from "next/link";

const Navbar = () => {

  return (
    <nav className="bg-gray-100  shadow-xl px-10 py-4 fixed t-0 z-50 w-full flex justify-between ">
        <Link
          href="/"
          className="flex items-center  space-y-1 text-xl md:text-2xl lg:text-3xl font-bold"
        >
          <span className="text-orange-500">
            Capito<span className="text-blue-900">Coding</span>
          </span>
        </Link>

        <div>
        <span className="text-blue-900 text-2xl md:text-3xl lg:text-4xl">
            &lt;/&gt;
          </span>
        </div>
    </nav>
  );
};

export default Navbar;
