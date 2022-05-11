import React from "react";

import * as S from "./styles";
import { Select, Row, Col, DatePicker, Radio, Button } from "antd";

import { POPULAR_ROUTE_TOPIC } from "./home.data";

import CarouselHome from "./components/Carosel.home";
import NewTopic from "./components/NewTopic";
import ConnectionSection from "./components/Connection/";
import Section from "./components/Section";
import CarStationSection from "./components/CarStation";

function Home(props) {
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  const renderSection = (values) => {
    return values.map((item, index) => (
      <li key={index}>
        <div>
          <img style={{ aspectRatio: "16/9" }} src={item.href} alt="photo1" />
          <div className="describe">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      </li>
    ));
  };

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
      <S.WrapperContent>
        <section>
          <S.Title>Ưu đãi nổi bật</S.Title>
          <CarouselHome />
        </section>
        <section>
          <S.Title>Tuyến đường phổ biến</S.Title>
          <S.Ul>{renderSection(POPULAR_ROUTE_TOPIC)}</S.Ul>
        </section>
        <section>
          <S.Title>Bài viết mới nhất của VeXeRe</S.Title>
          <NewTopic />
        </section>
        <section>
          <S.Title>Nền tảng kết nối người dùng và nhà xe</S.Title>
          <ConnectionSection />
        </section>
        <section>
          <S.Title>VeXeRe đã được nhắc đến trên</S.Title>
          <Section />
        </section>
        <section>
          <S.Title>Bến xe khách</S.Title>
          <CarStationSection />
        </section>
      </S.WrapperContent>
    </>
  );
}

export default Home;
