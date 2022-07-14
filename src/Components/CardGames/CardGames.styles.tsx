import styled from "styled-components";

export const Container = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  .gameName {
    width: 100%;
    height: 10%;
    font-size: 1.3em;
    padding-top: 0.3em;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 80%;
`;
export const Prices = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .infoPrices {
    font-size: 1.2em;
  }
  #discount {
    background-color: #01c38d;
    border-radius: 5px;
    font-weight: bold;
    padding: 0.2em;
  }
  #lastPrice {
    text-decoration: line-through;
    color: #696e79;
  }
  #currentPrice {
    font-weight: bold;
  }
`;
