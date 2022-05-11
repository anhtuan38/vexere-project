import styled from "styled-components";
import { Menu } from "antd";

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
`;

export const Title = styled.div`
  margin: 20px 0;
`;

export const MenuCustom = styled(Menu)`
  width: fit-content;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: fit-content;
`;
