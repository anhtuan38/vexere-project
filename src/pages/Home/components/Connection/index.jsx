import React from "react";

import { CONNECTION_TOPIC } from "../../home.data";

import * as S from "./styles";

function ConnectionSection() {
  const renderSection = ({ data }) => {
    return data.map((item, index) => (
      <S.Card key={index}>
        <div className="block-img">
          <img src={item.href} style={{ aspectRatio: "1/1" }} alt="icon" />
        </div>
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </S.Card>
    ));
  };

  return <S.Container>{renderSection({ data: CONNECTION_TOPIC })}</S.Container>;
}

export default ConnectionSection;
