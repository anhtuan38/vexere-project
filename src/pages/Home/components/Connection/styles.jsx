import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;
export const Card = styled.div`
  width: 25%;
  display: flex;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;

  .block-img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  h3 {
    font-weight: bolder;
    font-size: 18px;
  }
  p {
    color: rgba(0, 0, 0, 0.5);
  }
`;
