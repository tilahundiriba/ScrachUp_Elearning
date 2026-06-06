import React, { useState } from "react";
import Logo from "./Logo";
import { RiArrowDownSLine, RiCloseLine, RiMenuLine } from "@remixicon/react";
import { navItems } from "../data/data";
import Search from "./Search";
import Button from "./Button";

const Header = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 w-full bg-white py-4 border-b border-neutral-200 z-50">
      <div className="px-4 sm:px-8 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <Logo />
        {/* Mobile Menu */}
        <nav className="lg:hidden relative">
          <button
            className="p-3 shadow-util rounded-full font-medium 
          transition-colors hove:bg-neutral-100 focus:bg-neutral-100"
           onClick={()=>setIsOpen(!isOpen)}>
            {isOpen? <RiCloseLine/> : <RiMenuLine/> } 
            
          </button>
          {/* list */}
          <ul
            className={`absolute top-full right-0 mt-3 shadow-util 
              bg-white rounded-lg min-w-[200px] w-full 
              transition opacity-0 invisible ${isOpen ? "opacity-100 visible":""}`}
          >
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center justify-between gap-1 text-gray-600 hover:bg-lime-50 transition-all px-4 py-1.5 rounded-lg"
                >
                  {item.label}
                </a>
                {item.hasDropdown && <RiArrowDownSLine className="group-hover:rotate-180 
                    group-focus:rotate-180 transition-transform"/>}
                {item.hasDropdown && (
                  <ul
                    className="absolute top-full bg-white right-0 mt-1 border border-neutral-200 shadow-util rounded-lg min-w-[200px] z-50 opacity-0 invisible group-hover:opacity-100
                    group-hover:visible transition-all duration-200 overflow-hidden"
                  >
                    {item.dropdown.map((link) => (
                      <li key={link} className="">
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-lime-50 hover:text-lime-600 transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Desktop menu */}
        <nav className="flex-1 lg:flex flex-wrap hidden">
          {/* center dive */}
          <div className="mx-auto flex items-center gap-7">
            {/* Search Bar */}
            <div className="hidden xl:block">
              <Search />
            </div>

            {/* list */}
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.id} className="relative group">
                  <a href={item.href} className="flex items-center gap-1 text-gray-600 hover:text-lime-600 focus:text-lime-600 transition-colors">
                    {item.label}
                    {item.hasDropdown && <RiArrowDownSLine className="group-hover:rotate-180 
                    group-focus:rotate-180 transition-transform"/>}
                    </a>
                    {item.hasDropdown && (
                      <ul className="absolute top-full left-0 mt-1 
                      bg-white border border-neutral-200 rounded-lg
                      shadow-util z-50 min-w-[200px] opacity-0
                       invisible group-hover:opacity-100 
                       group-hover:visible transition-all duration-200">
                        {item.dropdown.map((link) => (
                          <li key={link} className="">
                            <a href="#" className="block px-4 py-2 hover:bg-lime-50 
                            hover:text-lime-600 transition-colors">{link}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  
                </li>
              ))}
            </ul>
          </div>
          {/* Buttons */}
          <Button label="Sign up" />
        </nav>
        <div className="xl:hidden w-full mt-4">
          {/* Search Input */}
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
