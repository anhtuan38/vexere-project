import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ROUTERS } from "../../constants/routers";

import Logo from "../../images/icon_vxr_full.svg";

import { signUpAction, signInAction } from "../../redux/actions";

import {
  CaretDownOutlined,
  PhoneOutlined,
  UserOutlined,
  LockOutlined,
  CreditCardTwoTone,
  TagOutlined,
  GiftOutlined,
} from "@ant-design/icons";
import { BiCommentDetail } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";
import {
  Button,
  Modal,
  Form,
  Input,
  Checkbox,
  Row,
  Col,
  Menu,
  Dropdown,
  Avatar,
} from "antd";

import * as S from "./styles";

function Header(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formLogin] = Form.useForm();
  const [formRegister] = Form.useForm();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const nameUser = JSON.parse(localStorage.getItem("users")) || {};

  console.log({ signUpAction });
  const handleLogin = (values) => {
    dispatch(
      signInAction({
        data: {
          username: values.usernameLogin,
          password: values.passwordLogin,
        },
      })
    );
    // if (value.username === a.username && value.password === a.password) {
    //   alert("Login success");
    // } else alert("Login fair");
  };
  const handleLogout = () => {};

  const handleRegister = (values) => {
    dispatch(
      signUpAction({
        data: {
          username: values.username,
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
        callback: () => setIsLogin(true),
      })
    );
    // const users = JSON.parse(localStorage.getItem("users")) ?? [];
    // const listUser = [
    //   ...users,
    //   {
    //     username: value.username,
    //     password: value.password,
    //     confirmPassword: value.confirmPassword,
    //   },
    // ];
    // console.log(listUser);
    // localStorage.setItem("users", JSON.stringify(listUser));
    // const hasUserName = listUser.filter(
    //   (item) => value.username === item.username
    // );
    // hasUserName
    //   ? localStorage.setItem("users", JSON.stringify(value))
    //   : modal.error(config);
    // formRegister.resetFields();
  };

  return (
    <S.Container>
      <S.Header>
        <img src={Logo} alt="photo1" />
        <S.Nav>
          <li>Thuê xe</li>
          <li>Xe limousine</li>
          <li>Quản lí đơn hàng</li>
          <li>
            Trở thành đối tác <CaretDownOutlined></CaretDownOutlined>
          </li>
          <li>
            EN
            <img
              src="https://storage.googleapis.com/fe-production/images/english_icon.png"
              alt="photo2"
            />
          </li>
        </S.Nav>
        <Button icon={<PhoneOutlined rotate={90} />}>Hotline</Button>
        {nameUser.length !== 0 ? (
          <Dropdown
            overlay={
              <Menu triggerSubMenuAction>
                <Menu.Item
                  icon={<UserOutlined />}
                  onClick={() => navigate(ROUTERS.USER_INFO)}
                >
                  Thông tin cá nhân
                </Menu.Item>
                <Menu.Item
                  icon={<TagOutlined />}
                  onClick={() => navigate(ROUTERS.USER_PAGE_UNDEVELOPED)}
                >
                  Thành viên thường
                </Menu.Item>
                <Menu.Item
                  icon={<HiOutlineTicket />}
                  onClick={() => navigate(ROUTERS.USER_MY_TICKET)}
                >
                  Vé của tôi
                </Menu.Item>
                <Menu.Item
                  icon={<GiftOutlined />}
                  onClick={() => navigate(ROUTERS.USER_PAGE_UNDEVELOPED)}
                >
                  Ưu đãi
                </Menu.Item>
                <Menu.Item
                  icon={<CreditCardTwoTone />}
                  onClick={() => navigate(ROUTERS.USER_PAGE_UNDEVELOPED)}
                >
                  Quản lí thẻ
                </Menu.Item>
                <Menu.Item
                  icon={<BiCommentDetail />}
                  onClick={() => navigate(ROUTERS.USER_PAGE_UNDEVELOPED)}
                >
                  Nhận xét của tôi
                </Menu.Item>
                <Menu.Item
                  icon={<LockOutlined />}
                  onClick={() => navigate(ROUTERS.USER_CHANGE_PASSWORD)}
                >
                  Đổi mật khẩu
                </Menu.Item>
                <Menu.Item
                  icon={<UserOutlined />}
                  onClick={() => handleLogout()}
                >
                  Đăng xuất
                </Menu.Item>
              </Menu>
            }
          >
            <div style={{ border: "1px solid green", padding: "5px 10px" }}>
              Hello abcdef{nameUser.username}
            </div>
          </Dropdown>
        ) : (
          <Button
            type="primary"
            icon={
              <Avatar
                size="small"
                style={{
                  marginRight: "10px",
                }}
                icon={<UserOutlined />}
              />
            }
            onClick={() => setIsModalVisible(true)}
          >
            Đăng nhập
          </Button>
        )}
        <Modal
          title={isLogin ? "Đăng nhập" : "Đăng ký"}
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          {isLogin ? (
            <>
              <Form
                form={formLogin}
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={(values) => handleLogin(values)}
              >
                <Form.Item
                  name="usernameLogin"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username or SDT!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username or SDT"
                  />
                </Form.Item>
                <Form.Item
                  name="passwordLogin"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Row>
                  <Col span={12}>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12} style={{ textAlign: "end" }}>
                    <a className="login-form-forgot" href="#!">
                      Forgot password
                    </a>
                  </Col>
                </Row>
                <Form.Item style={{ textAlign: "center", marginTop: "20px" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
              <Row>
                <S.Span>hoặc</S.Span>
              </Row>
              <Row>
                <Button
                  style={{ width: "100%", height: "40px", marginTop: "20px" }}
                  type="primary"
                  onClick={() => null}
                >
                  Đăng nhập với google
                </Button>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <p style={{ marginRight: "10px" }}>Bạn chưa có tài khoản ?</p>
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLogin(false);
                  }}
                >
                  Đăng ký
                </a>
              </Row>
            </>
          ) : (
            <>
              <Form
                form={formRegister}
                name="form-register"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={(values) => handleRegister(values)}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username or SDT!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username or SDT"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Item>
                <Row>
                  <Col span={24} style={{ textAlign: "end" }}>
                    <a className="login-form-forgot" href="#!">
                      Forgot password
                    </a>
                  </Col>
                </Row>
                <Form.Item style={{ textAlign: "center", marginTop: "20px" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Register Now
                  </Button>
                </Form.Item>
              </Form>
              <Row>
                <S.Span>hoặc</S.Span>
              </Row>
              <Row>
                <Button
                  style={{ width: "100%", height: "40px", marginTop: "20px" }}
                  type="primary"
                  onClick={() => null}
                >
                  Đăng ký với google
                </Button>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <p style={{ marginRight: "10px" }}>Bạn đã có tài khoản ?</p>
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLogin(true);
                  }}
                >
                  Đăng nhập
                </a>
              </Row>
            </>
          )}
        </Modal>
      </S.Header>
    </S.Container>
  );
}

export default Header;
