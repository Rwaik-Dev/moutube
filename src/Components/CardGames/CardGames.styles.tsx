import styled from "styled-components";
import px2vw from "../../Utils/px2vw";

export const Container = styled.div`
  width: ${px2vw(420)};
  height: ${px2vw(330)};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 ${px2vw(12)};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  .gameName {
    width: 100%;
    height: ${px2vw(25)};
    font-size: ${px2vw(20)};
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height: ${px2vw(250)};
  
`;
export const Prices = styled.div`
  width: 100%;
  height: ${px2vw(50)};
  display: flex;
  align-items: center;
  justify-content: space-around;

  .infoPrices{
    font-size: ${px2vw(19)} ;
  }

  #discount {
    background-color: #01c38d;
    border-radius: 7px;
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
