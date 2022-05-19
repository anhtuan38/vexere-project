import { Col, Input, Radio, Row, Space } from "antd";
import React, { useState } from "react";
import * as S from "./styles";

import { BsFillPenFill } from "react-icons/bs";
import { urlImgs } from "./data.cart.js";

const Cart = () => {
  const [value, setValue] = useState(1);
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
                <BsFillPenFill style={{ marginRight: "5px", color: "blue" }} />
                <a href="#!">Sửa</a>
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
                <BsFillPenFill style={{ marginRight: "5px", color: "blue" }} />
                <a href="#!">Sửa</a>
              </div>
            </S.RowCustom>
            <h3>15h30 - 29/05/2022</h3>
            <h4>Văn phòng Đà Nẵng</h4>
            <S.RowCustom>
              <p>Điểm trả (dự kiến)</p>
              <div>
                <BsFillPenFill style={{ marginRight: "5px", color: "blue" }} />
                <a href="#!">Sửa</a>
              </div>
            </S.RowCustom>
            <h3>18h00 - 29/05/2022</h3>
            <h4>Văn phòng Huế</h4>
          </S.ContainerRight>
          <Row style={{ marginTop: "20px" }}>
            <h3>Bạn đã có mã giảm giá</h3>
            <S.RowCustom>
              <Col>
                <p>Mã giảm giá</p>
              </Col>
              <Col>
                <Input
                  style={{ width: "100%" }}
                  placeholder="Nhập mã giảm giá"
                />
              </Col>
            </S.RowCustom>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <h3>Tổng tiền</h3>
          </Row>
          <h4>1.000.000đ</h4>
          <a href="#!">Xem chi tiết</a>
        </Col>
      </Row>
    </S.Wrapper>
  );
};
export default Cart;
