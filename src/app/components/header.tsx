import React from 'react';
import { IoCartOutline, IoHeartOutline, IoSearch, IoPersonOutline } from 'react-icons/io5';

import Link from 'next/link';

export const Header = () => {
  return (
    <div className="bg-amber-100">
      <header className="text-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <nav className="flex flex-col md:flex-row items-center md:items-end text-base justify-between gap-4 md:gap-9 ml-auto">
            <Link className="hover:text-blue" href="/mainpage">Home</Link>
            <Link className="hover:text-blue" href="/shop">shop</Link> 
            <Link className="hover:text-blue" href="/account">About</Link>
            <Link className="hover:text-blue" href="/contact">contact</Link>
          </nav>
<div className="flex items-center gap-3 ml-auto">
  <ul className="flex gap-4">
    <li>
      <Link href="/search">
        <IoSearch className="text-black text-xl" />
      </Link>
    </li>
    <li>
      <Link href="/favorites">
        <IoHeartOutline className="text-black text-xl" size={24} />
      </Link>
    </li>
    <li>
      <Link href="/cart">
        <IoCartOutline className="text-black text-xl" size={24} />
      </Link>
    </li>
  </ul>
</div>

        </div>
      </header>
    </div>
  );
};