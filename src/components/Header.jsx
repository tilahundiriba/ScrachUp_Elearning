import React from "react";
import Logo from "./Logo";
import { RiArrowDownSLine, RiMenuLine } from "@remixicon/react";
import { navItems } from "../data/data";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <div className="container">
        {/* Logo */}
        <Logo />
        {/* Mobile Menu */}
        <nav className="">
          <button className="">
            <RiMenuLine />
          </button>
          {/* list */}
          <ul className="">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href="" className="">
                  {item.label}
                  {item.hasDropdown && <RiArrowDownSLine />}
                  {item.hasDropdown && (
                    <ul className="">
                      {item.dropdown.map((link) => (
                        <li key={link} className="">
                          <a href="#">{link}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Desktop menu */}
          <nav className="">
        {/* Search Bar */}
        <Search/>
          {/* list */}
          <ul className="">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href="" className="">
                  {item.label}
                  {item.hasDropdown && <RiArrowDownSLine />}
                  {item.hasDropdown && (
                    <ul className="">
                      {item.dropdown.map((link) => (
                        <li key={link} className="">
                          <a href="#">{link}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
