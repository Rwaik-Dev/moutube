import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 2em ;
  background-color: #696e799b;
  border-radius: 10px;
  padding: 1em;
  h5 {
    background: none;
    font-size: 1.2em;
    :hover {
      transition: all 0.6s;
      color: #01c38d;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: none;
`;
