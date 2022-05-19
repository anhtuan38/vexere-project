import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
import { GoLocation } from "react-icons/go";

import { Col, Input, Radio, Row, Space, Button, Modal, Form } from "antd";
import React, { useState } from "react";
import * as S from "./styles";

import { BsFillPenFill } from "react-icons/bs";
import { urlImgs } from "./data.cart.js";

const Cart = () => {
  const [value, setValue] = useState(1);
  const [valueLocation, setValueLocation] = useState(1);
  const [editUser, setEditUser] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const renderChecklist = () => {
    return urlImgs.map((item) => (
      <Radio value={item.id} key={item.id}>
        <S.ColCustom>
          <Row span={24}>
            <img src={item.url} alt="icon" style={{ marginRight: "10px" }} />
            <h4>{item.title}</h4>
          </Row>
          <Row>
            <p>{item.description}</p>
          </Row>
        </S.ColCustom>
      </Radio>
    ));
  };
  const handleEditUser = (item) => {
    setEditUser(!editUser);
  };
  return (
    <S.Wrapper>
      <Row>
        <Col span={15}>
          <h3>Phương thức thanh toán</h3>
          <S.ContainerLeft>
            <Radio.Group
              onChange={(e) => setValue(e.target.value)}
              value={value}
            >
              <Space direction="vertical">{renderChecklist()}</Space>
            </Radio.Group>
          </S.ContainerLeft>
        </Col>
        <Col span={8} style={{ marginLeft: "20px" }}>
          <h3>Thông tin chuyến đi</h3>
          <S.ContainerRight>
            <S.RowCustom>
              <p>Hành khách</p>
              <div>
                <Button
                  type="link"
                  onClick={() => {
                    setEditUser(!editUser);
                  }}
                  icon={<BsFillPenFill style={{ marginRight: "5px" }} />}
                >
                  Sửa
                </Button>
                <Modal
                  title="Đổi thông tin liên hệ"
                  visible={editUser}
                  onOk={handleEditUser}
                  onCancel={() => setEditUser(!editUser)}
                  footer={null}
                >
                  <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={() => null}
                    onFinishFailed={() => null}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Họ và tên"
                      name="Fullname"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập Tên!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="PhoneNumber"
                      name="SDT"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập Số điện thoại!",
                        },
                      ]}
                    >
                      <ConfigProvider locale={en}>
                        <CountryPhoneInput />
                      </ConfigProvider>
                    </Form.Item>
                    <Form.Item
                      label="Email"
                      name="Email"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập Email!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Button
                      style={{ width: "100%", backgroundColor: "#faad14" }}
                      htmlType="submit"
                    >
                      Cập nhật
                    </Button>
                  </Form>
                </Modal>
              </div>
            </S.RowCustom>
            <h4>Nguyễn Văn A</h4>
            <p>Số điện thoại</p>
            <h4>0868268142</h4>
            <p>Email</p>
            <h4>Tuanphan204@gmail.com</h4>
            <p>Nhà xe</p>
            <h4>Hoàng đức Limousine</h4>
            <S.RowCustom>
              <p>Điểm đón (dự kiến)</p>
              <div>
                <Button
                  type="link"
                  onClick={() => {
                    setEditLocation(!editLocation);
                  }}
                  icon={<BsFillPenFill style={{ marginRight: "5px" }} />}
                >
                  Sửa
                </Button>
                <Modal
                  title="Đổi Điểm đón"
                  visible={editLocation}
                  onOk={handleEditUser}
                  onCancel={() => setEditLocation(!editLocation)}
                  footer={null}
                >
                  <Form
                    name="basic"
                    layout="horizontal"
                    initialValues={{ remember: true }}
                    onFinish={() => null}
                    onFinishFailed={() => null}
                    autoComplete="off"
                  >
                    <S.ContainerLeft>
                      <Radio.Group
                        style={{ width: "100%" }}
                        onChange={(e) => setValueLocation(e.target.value)}
                        value={valueLocation}
                      >
                        <Space direction="vertical" style={{ width: "100%" }}>
                          <Radio value={1}>
                            <S.ColCustom>
                              <Row>
                                <h4 style={{ marginRight: "20px" }}>21h30</h4>
                                <p>Số 123 Phạm hùng</p>
                              </Row>
                              <Row>
                                <p>
                                  <GoLocation />
                                  Số 123 Phạm hùng, Hà nội
                                </p>
                              </Row>
                            </S.ColCustom>
                          </Radio>
                          <Radio value={2}>
                            <S.ColCustom>
                              <Row>
                                <h4 style={{ marginRight: "20px" }}>22h30</h4>
                                <p>Số 31231</p>
                              </Row>
                              <Row>
                                <p>
                                  <GoLocation />
                                  Số 31231 , Hà nội
                                </p>
                              </Row>
                            </S.ColCustom>
                          </Radio>
                        </Space>
                      </Radio.Group>
                    </S.ContainerLeft>

                    <Button
                      style={{ width: "100%", backgroundColor: "#faad14" }}
                      htmlType="submit"
                    >
                      Cập nhật
                    </Button>
                  </Form>
                </Modal>
              </div>
            </S.RowCustom>
            <h3>15h30 - 29/05/2022</h3>
            <h4>Văn phòng Đà Nẵng</h4>
            <S.RowCustom>
              <p>Điểm trả (dự kiến)</p>
              <div>
                <Button
                  type="link"
                  icon={<BsFillPenFill style={{ marginRight: "5px" }} />}
                >
                  Sửa
                </Button>
              </div>
            </S.RowCustom>
            <h3>18h00 - 29/05/2022</h3>
            <h4>Văn phòng Huế</h4>
          </S.ContainerRight>
          <Row style={{ marginTop: "20px" }}>
            <S.ContainerRight>
              <h3>Bạn đã có mã giảm giá</h3>
              <S.RowCustom>
                <Col>
                  <p>Mã giảm giá</p>
                </Col>
                <Col style={{ width: "100%" }}>
                  <Input.Group compact>
                    <Input
                      style={{ width: "calc(100% - 100px)" }}
                      placeholder="Nhập mã giảm giá"
                    />
                    <Button type="primary">Áp dụng</Button>
                  </Input.Group>
                </Col>
              </S.RowCustom>
              <S.RowCustom>
                <h3>Tổng tiền</h3>
                <h4 style={{ color: "green" }}>1.000.000đ</h4>
              </S.RowCustom>
              <Button type="primary" style={{ marginLeft: "3.5rem" }}>
                Tiếp tục thanh toán
              </Button>
            </S.ContainerRight>
          </Row>
        </Col>
      </Row>
    </S.Wrapper>
  );
};
export default Cart;
