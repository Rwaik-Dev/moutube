import styled from "styled-components";
import px2vw from "../../Utils/px2vw";

export const Container = styled.div`
  width: ${px2vw(420)};
  height: ${px2vw(330)};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 ${px2vw(12)};

  .gameName {
    width: 100%;
    height: ${px2vw(25)};
    font-size: ${px2vw(20)};
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  /* Responsividade */
  @media (max-width: 425px) {
    height: ${px2vw(540)};
    width: ${px2vw(460)};
    margin: ${px2vw(5)} ${px2vw(15)};

    .gameName {
      height: ${px2vw(40)};
      font-size: ${px2vw(30)};
    }
  }
`;

export const ImageBox = styled.div`
  height: ${px2vw(250)};
  img {
    width: 100%;
  }

  /* Responsividade */
  @media (max-width: 425px) {
    height: ${px2vw(440)};
  }
`;
export const Prices = styled.div`
  width: 100%;
  height: ${px2vw(50)};
  display: flex;
  align-items: center;
  justify-content: space-around;

  .infoPrices {
    font-size: ${px2vw(19)};
  }

  /* Responsividade */
  @media (max-width: 425px) {
    height: ${px2vw(40)};
    .infoPrices {
      font-size: ${px2vw(30)};
    }
  }

  #discount {
    background-color: #01c38d;
    border-radius: 3px;
    font-weight: bold;
    padding: ${px2vw(5)};
  }
  #lastPrice {
    text-decoration: line-through;
    color: #696e79;
  }
  #currentPrice {
    font-weight: bold;
  }
`;
