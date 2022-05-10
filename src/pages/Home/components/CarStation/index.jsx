import React from "react";

import { CAR_STATION } from "./data";
import * as S from "./styles";

function CarStationSection() {
  const renderSection = ({ data }) => {
    return data.map((item, index) => (
      <S.Image key={index}>
        <img src={item.src} alt="car_station" />
        <p>{item.title}</p>
      </S.Image>
    ));
  };
  return <S.Wrapper>{renderSection({ data: CAR_STATION })}</S.Wrapper>;
}

export default CarStationSection;
