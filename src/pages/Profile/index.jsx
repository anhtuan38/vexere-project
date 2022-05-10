import React from "react";

import { Breadcrumb } from "antd";
import {
  UserOutlined,
  CreditCardTwoTone,
  IdcardOutlined,
  TagOutlined,
  GiftOutlined,
} from "@ant-design/icons";
import { BiCommentDetail } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";

import * as S from "./styles";

function Profile() {
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
    getItem("Quản lí thẻ", "6", <IdcardOutlined />),
    getItem("Nhận xét của tôi", "5", <BiCommentDetail />),
    getItem("Đăng xuất", "7", <UserOutlined />),
  ];
  return (
    <S.Container>
      <S.Title>
        <Breadcrumb separator=">">
          <Breadcrumb.Item href="#!" className="link">
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>Thông tin tài khoản</Breadcrumb.Item>
        </Breadcrumb>
      </S.Title>
      <S.Content>
        <S.MenuCust
          triggerSubMenuAction
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </S.Content>
    </S.Container>
  );
}

export default Profile;
