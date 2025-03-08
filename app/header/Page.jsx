
"use client"

import React from 'react';
import { IoSearch } from "react-icons/io5";
import { IoCart } from "react-icons/io5";

const Header = () => {
  const [cartCount, setCartCount] = React.useState(0);

  const navText = "SEASONAL SALE: PURCHASE ANY 2 JEWELLERY ITEMS & RECEIVE A 3rd FREE! FREE SHIPPING"

  return (
    <header className=" text-gray-600 body-font hidden md:block bg-gradient-to-r from-goldDark via-goldMid to-goldDark py-2 ">
      <div className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl"></span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <p className='text-black text-xs animate-wiggle'>{navText}</p>
        </nav>
        <div className='inline-flex items-center py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 space-x-3'>
          <div className='flex space-x-2 items-center'>
            <IoSearch className='text-black' />
            <span className='text-xs text-black font-medium'>SEARCH</span>
          </div>
          <div className="relative inline-block">
            <IoCart className='w-5 h-5 text-black' />
            <span className="absolute flex justify-center text-center items-center -top-1 -right-1 bg-[#4A3021] text-black text-[10px] font-bold rounded-full w-4 h-4">
              {cartCount}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header