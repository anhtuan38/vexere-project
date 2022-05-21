import React from "react";
import Banner from "./Banner";
import Sort from "./Sort";
import TicketContainer from "./TicketContainer";

function FilterContent() {
  return (
    <>
      <h1>
        Đặt mua vé xe đi Đà Nẵng từ Hà Nội chất lượng cao và giá vé ưu đãi nhất:
        3 chuyến
      </h1>
      <Banner />
      <Sort />
      <TicketContainer />
      <TicketContainer />
      <TicketContainer />
      <TicketContainer />
      <TicketContainer />
    </>
  );
}

export default FilterContent;
