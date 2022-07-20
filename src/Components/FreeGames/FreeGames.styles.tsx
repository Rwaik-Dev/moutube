import styled from "styled-components";
import px2vw from "../../Utils/px2vw";

export const Container = styled.div`
  width: 100%;
  margin-top: ${px2vw(32)};
  background-color: #696e799b;
  border-radius: 10px;
  padding: ${px2vw(5)};
  height: ${px2vw(420)};

  h5 {
    background: none;
    height: ${px2vw(30)};
    font-size: ${px2vw(20)};
    :hover {
      transition: all 0.6s;
      color: #01c38d;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  height: ${px2vw(380)};
  justify-content: space-evenly;
  background: none;
`;
