import React from "react";
import Title from "./utils/Title";
import Item from "./utils/Item";

const Sales = ({ endpoint }) => {
  console.log(endpoint);
  return (
    <>
      <div>
        <Title />
        <div>
          <Item />
        </div>
      </div>
    </>
  );
};

export default Sales;
