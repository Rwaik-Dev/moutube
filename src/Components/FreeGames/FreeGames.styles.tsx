import styled from "styled-components";
import px2vw from "../../Utils/px2vw";

export const Container = styled.div`
  width: ${px2vw(1330)};
  margin-top: ${px2vw(32)};
  background-color: #696e799b;
  border-radius: ${px2vw(10)};
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

  /* Responsivo */
  @media (max-width: 425px) {
    height: ${px2vw(1200)};

    h5 {
      height: ${px2vw(70)};
      font-size: ${px2vw(50)};
    }
  }
`;

export const Box = styled.div`
  display: flex;
  height: ${px2vw(380)};
  justify-content: space-evenly;
  background: none;
  /* Responsivo */
  @media (max-width: 425px) {
    height: ${px2vw(1120)};
    padding: 0 ${px2vw(150)};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
