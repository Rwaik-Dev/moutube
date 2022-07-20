import styled from "styled-components";
import px2vw from "../../Utils/px2vw";

export const Container = styled.div`
  width: ${px2vw(320)};
  height: ${px2vw(360)};
  display: flex;
  flex-direction: column;

  #imageGame {
    width: 100%;
    height: ${px2vw(180)};
    border-radius: 20px;
    margin-bottom: ${px2vw(10)};
  }
  #description {
    height: ${px2vw(155)};
  }
  #gameName {
    height: ${px2vw(25)};
    font-weight: bold;
  }
  #gameDescription {
    height: ${px2vw(130)};
  }
  #currentPrice {
    height: ${px2vw(25)};
  }
`;
