import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div>
            <img src={logo} alt="logo" className="" />
          </div>
          <ul>
            <li>
              <MagnifyingGlassIcon className="icon-style" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
