import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
// import * as S from "./styles";

function ProfileLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default ProfileLayout;
