import React from "react";

import * as S from "./styles";
import { NEWS_TOPIC } from "../../home.data";

function NewTopic() {
  const renderSection = ({ data }) => {
    return data.map((item, index) => {
      return (
        <S.CardCustom
          hoverable
          style={{ width: 300, borderRadius: "10px" }}
          cover={<img alt="example" src={item.href} />}
          key={index}
        >
          <S.CardCustom.Meta style={{ width: "100%" }} title={item.title} />
        </S.CardCustom>
      );
    });
  };
  return <S.Container>{renderSection({ data: NEWS_TOPIC })}</S.Container>;
}

export default NewTopic;
