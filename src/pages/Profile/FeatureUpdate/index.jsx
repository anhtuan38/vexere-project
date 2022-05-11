import React from "react";

import * as S from "./styles";

import ImageUpdate from "../../../images/image-update.svg";

function FeatureUpdate() {
  return (
    <S.Container>
      <p>Tính năng đang phát triển, bạn vui lòng quay lại sau nhé</p>
      <img src={ImageUpdate} alt="update" />
    </S.Container>
  );
}

export default FeatureUpdate;
