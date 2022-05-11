import React from "react";
import { Link } from "react-router-dom";

import { Tabs } from "antd";
import Cancel from "./Completed";
import Upcoming from "./Upcoming";

import * as S from "./styles";

function MyTickets() {
  function callback(key) {}

  return (
    <S.Container>
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        centered
        tabBarGutter={250}
      >
        <Tabs.TabPane tab="Chuyến sắp đi" key="1">
          Chưa có chuyến đi nào <Link to="#!">Đặt vé ngay</Link>
          <Upcoming />
          <Upcoming />
          <Upcoming />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Chuyến đã đi" key="2">
          Chưa có chuyến đi nào
        </Tabs.TabPane>
        <Tabs.TabPane tab="Chuyến đã huỷ" key="3">
          <Cancel />
          <Cancel />
          <Cancel />
        </Tabs.TabPane>
      </Tabs>
    </S.Container>
  );
}

export default MyTickets;
