import styled from "styled-components";
import { Menu, Form } from "antd";

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
`;

export const Title = styled.div`
  margin: 20px 0;
`;

export const MenuCust = styled(Menu)`
  width: 20%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
export const Content = styled.div`
  display: flex;
`;

export const FormCustom = styled(Form)`
  width: 100%;
  margin-left: 50px;
`;
