import React from "react";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const CartCount = () => {
  return (
    <>
      <div className="bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full ">
        <div className="">
          <div className="">
            <ChevronDoubleLeftIcon className="w-5 h-5" />
          </div>
          <div className="">
            <h1>
              Your Cart<span>(Items) </span>
            </h1>
          </div>
        </div>
        <div className="">
          <button type="button" className="">
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
