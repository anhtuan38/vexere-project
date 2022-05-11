import React, { useState, useSelector } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { ROUTERS } from "../../constants/routers";
import { menuItems } from "../../constants/menu";

import Logo from "../../images/icon_vxr_full.svg";

import { loginAction, registerAction } from "../../redux/actions";

import {
  CaretDownOutlined,
  PhoneOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";

import {
  Button,
  Modal,
  Form,
  Input,
  Row,
  Col,
  Menu,
  Dropdown,
  Avatar,
} from "antd";

import * as S from "./styles";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formLogin] = Form.useForm();
  const [formRegister] = Form.useForm();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const nameUser = JSON.parse(localStorage.getItem("user")) || {};
  // const { userInfo } = useSelector((state) => state.userReducer);
  // console.log("🚀 ~ file: index.jsx ~ line 47 ~ Header ~ userInfo", userInfo);

  const handleLogin = (values) => {
    dispatch(
      loginAction({
        data: {
          email: values.emailLogin,
          password: values.passwordLogin,
        },
        callback: () => setIsModalVisible(false),
      })
    );
  };

  const handleRegister = (values) => {
    dispatch(
      registerAction({
        data: {
          email: values.emailRegister,
          password: values.passwordRegister,
        },
        callback: () => setIsLogin(true),
      })
    );
  };

  const handleClick = (value) => {
    if (value.key === "8") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      navigate(ROUTERS.HOME);
    }

    console.log(ROUTERS[value.key]?.isDeveloping);
    if (ROUTERS[value.key]?.isDeveloping) {
      navigate(ROUTERS.USER_PAGE_UNDEVELOPED.PATH);
    } else {
      navigate(ROUTERS[value.key].PATH);
    }
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
        {nameUser.email ? (
          <Dropdown
            overlay={
              <Menu
                triggerSubMenuAction
                defaultSelectedKeys={["1"]}
                items={menuItems}
                onClick={handleClick}
              />
            }
          >
            <div style={{ border: "1px solid green", padding: "5px 10px" }}>
              Hello {nameUser.email}
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
                onFinish={handleLogin}
              >
                <Form.Item
                  name="emailLogin"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Email"
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
                onFinish={handleRegister}
              >
                <Form.Item
                  name="emailRegister"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email",
                    },
                  ]}
                >
                  <Input
                    type="email"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Please input your Email"
                  />
                </Form.Item>
                <Form.Item
                  name="passwordRegister"
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
                        if (
                          !value ||
                          getFieldValue("passwordRegister") === value
                        ) {
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
