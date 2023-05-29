import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

const CartItem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  return (
    <>
      <div className="">
        <div className="">
          <div>
            <img src={img} alt={`img/cart-item ${id}`} />
          </div>
          <div className="">
            <div>
              <h1>{title} </h1>
              <p>{text}</p>
            </div>
            <div className="">
              <button type="button" className="">
                <MinusIcon className="w-5 h-5" />
              </button>
              <div className="">{cartQuantity}</div>
              <button type="button" className="">
                <PlusIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>{price * cartQuantity}</h1>
          </div>
          <div>
            <button type="button" className="">
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
