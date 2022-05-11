import React from "react";

import { Button, Row, Col } from "antd";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import * as S from "./styles";

function Upcoming() {
  return (
    <S.Container>
      <h3>Chủ Nhật, 29/05/2022</h3>
      <S.BoxContent>
        <Row style={{ width: "100%" }}>
          <Col span={20}>
            <h1>15:30</h1>
            <p>Xe Limousine</p>
            <p>Đà Nẵng đi Thừa Thiên Huế</p>
          </Col>
          <Col span={4}>
            <S.UpcomingBtn>Chưa thanh toán</S.UpcomingBtn>
          </Col>
        </Row>
      </S.BoxContent>
      <Col span={24}>
        <Button
          icon={<BsFillPhoneVibrateFill style={{ marginRight: "10px" }} />}
          style={{ color: "#40A9FF", width: "50%" }}
        >
          Gọi điện
        </Button>
        <Button
          icon={<GoLocation style={{ marginRight: "10px" }} />}
          style={{ color: "#40A9FF", width: "50%" }}
        >
          Xem vị trí
        </Button>
      </Col>
    </S.Container>
  );
}

export default Upcoming;
