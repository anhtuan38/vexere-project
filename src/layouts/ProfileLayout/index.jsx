import React from "react";
import { Outlet } from "react-router-dom";

import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";

import { ROUTERS } from "../../constants/routers";

import {
  UserOutlined,
  IdcardOutlined,
  TagOutlined,
  GiftOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { BiCommentDetail } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";

import Header from "../Header";
import * as S from "./styles";

function ProfileLayout() {
  const navigate = useNavigate();
  function getItem(label, key, icon) {
    return {
      label,
      key,
      icon,
    };
  }

  const items = [
    getItem("Thông tin cá nhân", "1", <UserOutlined />),
    getItem("Thành viên thường", "2", <TagOutlined />),
    getItem("Vé của tôi", "3", <HiOutlineTicket />),
    getItem("Ưu đãi", "4", <GiftOutlined />),
    getItem("Quản lí thẻ", "5", <IdcardOutlined />),
    getItem("Nhận xét của tôi", "6", <BiCommentDetail />),
    getItem("Đổi mật khẩu", "7", <LockOutlined />),
    getItem("Đăng xuất", "8", <UserOutlined />),
  ];
  const click = (value) => {
    if (value.key === "1") {
      navigate(ROUTERS.USER_INFO);
    }
    if (value.key === "7") {
      navigate(ROUTERS.USER_CHANGE_PASSWORD);
    }
    if (value.key === "8") {
      // xoa token
      navigate(ROUTERS.HOME);
    }
  };
  return (
    <div>
      <Header />
      <div className="wrapper">
        <S.Title>
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="#!" className="link">
              Trang chủ
            </Breadcrumb.Item>
            <Breadcrumb.Item>Thông tin tài khoản</Breadcrumb.Item>
          </Breadcrumb>
        </S.Title>
        <S.Container>
          <S.MenuCust
            triggerSubMenuAction
            defaultSelectedKeys={["1"]}
            items={items}
            onClick={click}
          />
          <Outlet />
        </S.Container>
      </div>
    </div>
  );
}

export default ProfileLayout;
