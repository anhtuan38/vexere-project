import React, { useState } from "react";

import * as S from "./styles";
import { Select, Row, Col, DatePicker, Radio, Button } from "antd";
import {} from "@ant-design/icons";

import { IoLocationSharp } from "react-icons/io5";

function Home(props) {
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <>
      <S.Container>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2>VeXeRe - Cam kết hoàn 150% nếu nhà xe không giữ vé</h2>
          <Row style={{ width: "100%", display: "flex", alignItems: "" }}>
            <Col span={7} style={{ margin: "0 20px" }}>
              <Select
                showSearch
                placeholder="Vui lòng chọn nơi đi"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Select.Option value="HN">Hà Nội</Select.Option>
                <Select.Option value="DN">Đà Nẵng</Select.Option>
                <Select.Option value="HCM">Tp. Hồ Chí Minh</Select.Option>
              </Select>
            </Col>
            <Col span={7} style={{ margin: "0 20px" }}>
              <Select
                showSearch
                placeholder="Vui lòng chọn nơi đi"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Select.Option value="HN">Hà Nội</Select.Option>
                <Select.Option value="DN">Đà Nẵng</Select.Option>
                <Select.Option value="HCM">Tp. Hồ Chí Minh</Select.Option>
              </Select>
            </Col>
            <Col span={5} style={{ margin: "0 20px" }}>
              <DatePicker />
            </Col>
            <Col span={5}>
              <S.Button>Tìm chuyến</S.Button>
            </Col>
          </Row>
          <Row>
            <p style={{ lineHeight: "2", marginRight: "20px" }}>
              Bạn đặt xe để:
            </p>
            <Radio.Group defaultValue="a" size="large">
              <Radio.Button value="a">Du lich</Radio.Button>
              <Radio.Button value="b">Ve Que</Radio.Button>
              <Radio.Button value="c">Cong Tac</Radio.Button>
            </Radio.Group>
            <Button>Gui</Button>
          </Row>
        </Col>
      </S.Container>
    </>
  );
}

export default Home;
