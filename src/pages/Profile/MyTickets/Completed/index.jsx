import React from "react";

import * as S from "./styles";

function Ticket() {
  return (
    <S.Container>
      <h3>Chủ Nhật, 29/05/2022</h3>
      <S.BoxContent>
        <div>
          <h1>15:30</h1>
          <p>Xe Limousine</p>
          <p>Đà Nẵng đi Thừa Thiên Huế</p>
        </div>
        <div>
          <S.CancelledBtn>Đã huỷ</S.CancelledBtn>
        </div>
      </S.BoxContent>
    </S.Container>
  );
}

export default Ticket;
