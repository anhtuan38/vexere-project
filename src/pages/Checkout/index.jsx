import React, { useState } from "react";

import { Col, Input, Row, Button, Modal, Form } from "antd";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
import * as S from "./styles";

import { BsFillPenFill } from "react-icons/bs";
import { CloseCircleOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import confirm from "antd/lib/modal/confirm";

const Checkout = () => {
  const [editUser, setEditUser] = useState(false);

  const handleEditUser = (item) => {
    setEditUser(!editUser);
  };
  function showDeleteConfirm() {
    confirm({
      title: "Bạn có chắc chắn muốn hủy vé không?",
      icon: <QuestionCircleOutlined style={{ color: "red" }} />,
      content: "Thao tác này sẽ không khôi phục được !",
      okText: "Có",
      okType: "danger",
      cancelText: "Không",
      onOk() {
        console.log("OK");
      },
      onCancel() {},
    });
  }
  return (
    <S.Wrapper>
      <h2 style={{ color: "blue", fontWeight: "bold" }}>Đặt vé thành công</h2>
      <Row style={{ marginBottom: "2rem" }}>
        <Col style={{ width: "100%" }}>
          <S.RowCustom>
            <h3>Thông tin chuyến đi</h3>
            <div>
              <BsFillPenFill style={{ marginRight: "5px", color: "blue" }} />
              <a
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  setEditUser(!editUser);
                }}
              >
                Sửa
              </a>
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

          <S.ContainerRight>
            <S.RowCustom>
              <p>Mã đơn hàng</p>
              <h4>ABCDXYZ</h4>
            </S.RowCustom>
            <S.RowCustom>
              <p>Hành khách</p>
              <h4>Nguyễn Văn A</h4>
            </S.RowCustom>
            <S.RowCustom>
              <p>Số điện thoại</p>
              <h4>0868268142</h4>
            </S.RowCustom>
            <S.RowCustom>
              <p>Email</p>
              <h4>Tuanphan204@gmail.com</h4>
            </S.RowCustom>
            <S.RowCustom>
              <p>Nhà xe</p>
              <h4>Hoàng đức Limousine</h4>
            </S.RowCustom>
            <S.RowCustom>
              <p>Tuyến đường:</p>
              <h4>Hà Nội - Đà Nẵng</h4>
            </S.RowCustom>
            <S.RowCustom>
              <p>Mã ghế</p>
              <h4>B2</h4>
            </S.RowCustom>
            <S.RowCustom>
              <p>Giá vé</p>
              <h4>1x 190.000đ</h4>
            </S.RowCustom>
            <S.RowCustom>
              <p style={{ fontWeight: "bold" }}>Tổng tiền</p>
              <h3 style={{ fontWeight: "bold" }}>190.000đ</h3>
            </S.RowCustom>
          </S.ContainerRight>
        </Col>
      </Row>
      <S.ButtonCustom
        type="primary"
        danger
        icon={<CloseCircleOutlined />}
        onClick={showDeleteConfirm}
      >
        Hủy vé
      </S.ButtonCustom>
      <S.ButtonCustom type="primary">Xem ve</S.ButtonCustom>
    </S.Wrapper>
  );
};
export default Checkout;
