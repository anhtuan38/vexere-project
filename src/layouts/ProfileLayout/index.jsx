import React, { useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";

import { ROUTERS } from "../../constants/routers";
import { menuItems } from "../../constants/menu";

import Header from "../Header";
import * as S from "./styles";

function ProfileLayout(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (!token) {
      navigate(ROUTERS.HOME);
    }
  }, [token]);

  const setDefaultKey = () => {
    const defaultKey = menuItems.find((item) => item.key === location.pathname);
    return defaultKey ? defaultKey.key : "";
  };

  const handleClick = (value) => {
    console.log(
      "🚀 ~ file: index.jsx ~ line 38 ~ handleClick ~ value",
      ROUTERS[value.key].PATH
    );
    if (value.key === "HOME") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      navigate(ROUTERS.HOME);
    }

    if (ROUTERS[value.key]?.isDeveloping === false) {
      navigate(ROUTERS[value.key].PATH);
    } else {
      navigate(ROUTERS.USER_PAGE_UNDEVELOPED);
    }
  };
  return (
    <div>
      <Header />
      <div className="wrapper">
        <S.Title>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to={ROUTERS.HOME} className="link">
                Trang chủ
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Thông tin tài khoản</Breadcrumb.Item>
          </Breadcrumb>
        </S.Title>
        <S.Container>
          <S.MenuCustom
            triggerSubMenuAction
            defaultSelectedKeys={setDefaultKey}
            items={menuItems}
            onClick={handleClick}
          />
          <Outlet />
        </S.Container>
      </div>
    </div>
  );
}

export default ProfileLayout;
