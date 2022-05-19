import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../Header";

const CartLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default CartLayout;
