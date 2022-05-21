import React from "react";
import * as S from "./styles";
import { Col, Row } from "antd";

import Title from "./components/Title";
import FilterBar from "./components/FilterBar";
import FilterContent from "./components/FilterContent";

const filterPage = () => {
  return (
    <S.WrapperContent>
      <Title />
      <Row style={{ marginTop: "1rem" }} gutter={20}>
        <Col span={8}>
          <FilterBar />
        </Col>
        <Col span={16}>
          <FilterContent />
        </Col>
      </Row>
    </S.WrapperContent>
  );
};

export default filterPage;
