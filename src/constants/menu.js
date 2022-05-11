import {
  UserOutlined,
  LockOutlined,
  TagOutlined,
  GiftOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { BiCommentDetail } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";

export const menuItems = [
  {
    label: "Thông tin cá nhân",
    key: "USER_INFO",
    icon: <UserOutlined />,
  },
  {
    label: "Thành viên thường",
    key: "2",
    icon: <TagOutlined />,
  },
  {
    label: "Vé của tôi",
    key: "USER_MY_TICKET",
    icon: <HiOutlineTicket />,
  },
  {
    label: "Ưu đãi",
    key: "4",
    icon: <GiftOutlined />,
  },
  {
    label: "Quản lí thẻ",
    key: "5",
    icon: <IdcardOutlined />,
  },
  {
    label: "Nhận xét của tôi",
    key: "6",
    icon: <BiCommentDetail />,
  },
  {
    label: "Đổi mật khẩu",
    key: "USER_CHANGE_PASSWORD",
    icon: <LockOutlined />,
  },
  {
    label: "Đăng xuất",
    key: "HOME",
    icon: <UserOutlined />,
  },
];
