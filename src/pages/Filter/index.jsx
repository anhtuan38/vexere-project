import React from "react";

import { Steps } from "antd";
import * as S from "./styles";

function FilterPage() {
  return (
    <S.Container>
      <Steps size="small" current={2}>
        <Steps.Step title="Chỗ mong muốn" />
        <Steps.Step title="Điểm đón trả" />
        <Steps.Step title="Nhập thông tin" />
      </Steps>
    </S.Container>
  );
}

export default FilterPage;
