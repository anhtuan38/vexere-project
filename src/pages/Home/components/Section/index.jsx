import React from "react";

import { URL_IMAGE } from "./data";
import * as S from "./styles";

function Section() {
  const renderSection = ({ data }) => {
    return data.map((item, index) => (
      <S.Container key={index}>
        <img src={item.href} alt="logo" />
      </S.Container>
    ));
  };
  return <S.Section>{renderSection({ data: URL_IMAGE })}</S.Section>;
}

export default Section;
