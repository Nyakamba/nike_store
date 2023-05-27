import React from "react";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

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
            <li>
              <HeartIcon className="icon-style" />
            </li>
            <li>
              <button type="button" className="">
                <ShoppingBagIcon className="" />
                <div>0</div>{" "}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
