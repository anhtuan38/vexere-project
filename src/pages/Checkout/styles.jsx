import { Button, Col, Row } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 980px;
  margin: 30px auto;
  padding-bottom: 50px;
`;

export const ContainerLeft = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  padding: 20px;
  .ant-space-item {
    border-bottom: 1px solid #e8e8e8;
    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export const ContainerRight = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  padding: 20px;

  h4 {
    margin-bottom: 30px;
  }
`;

export const ColCustom = styled(Col)`
  width: 100%;
  margin-left: 20px;
`;
export const RowCustom = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  border-bottom: 1px solid #e8e8e8;
  p {
    margin-bottom: 0px;
    margin-right: 20px;
  }
`;

export const ButtonCustom = styled(Button)`
  width: 50%;
`;
