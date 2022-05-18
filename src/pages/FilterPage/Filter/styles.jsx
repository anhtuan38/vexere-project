import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 50px;
`;

export const Image = styled.div`
  width: 25%;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
  }

  p {
    color: #fff;
    font-size: 20px;
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
    font-weight: bold;
  }
`;
