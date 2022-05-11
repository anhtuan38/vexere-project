import styled from "styled-components";

export const Container = styled.div`
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 20px;

  h1 {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.65);
    margin: 0;
  }

  h3 {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.65);
  }
  p {
    margin: 0;
  }
`;

export const BoxContent = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
`;

export const UpcomingBtn = styled.div`
  width: fit-content;
  background-color: orange;
  font-weight: bold;
  color: white;
  padding: 3px 5px;
`;
