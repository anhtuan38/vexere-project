import styled, { css } from "styled-components";
import imageBackground from "../../images/ha-giang.png";

export const Container = styled.div`
  background-image: url(${imageBackground});
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #fff;
    width: 100%;
  }
  p {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  width: 100px;
  padding: 10px 20px;
  font-size: 20px;
  border: none;
  background-color: #f8ae00;
  cursor: pointer;
`;
