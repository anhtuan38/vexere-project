import styled from "styled-components";
import { Card } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 20px;
  margin-bottom: 20px;
  overflow-x: scroll;
  padding-bottom: 20px;
`;

export const CardCustom = styled(Card)`
  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
