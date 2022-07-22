import styled from "styled-components";
import px2vw from "../../Utils/px2vw";

export const Container = styled.div`
  width: ${px2vw(380)};
  height: ${px2vw(380)};
  display: flex;
  flex-direction: column;
  border-radius: ${px2vw(16)};
  :hover {
    transition: all 0.8s;
    background-color: #696e799b;
  }

  #imageGame {
    width: 100%;
    height: ${px2vw(190)};
    border-radius: ${px2vw(16)};
  }
  #description {
    height: ${px2vw(160)};
    width: ${px2vw(370)};
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    padding: 0 ${px2vw()};
  }
  #gameName {
    height: ${px2vw(30)};
    width: ${px2vw(350)};
    display: flex;
    align-items: center;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: none;
  }
  #gameDescription {
    height: ${px2vw(130)};
    width: ${px2vw(360)};
    text-size-adjust: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    background: none;
  }
  #currentPrice {
    height: ${px2vw(25)};
    padding-left: ${px2vw(10)};
    background: none;
  }
  /* 
  Pc : 200 caracteres
  Mobile: 85 Caracteres
*/
  @media (max-width: 425px) {
    height: ${px2vw(490)};
    #imageGame {
      height: ${px2vw(250)};
    }
    #description {
      height: ${px2vw(180)};

      #gameName {
        height: ${px2vw(40)};
      }
      #gameDescription {
        height: ${px2vw(124)};
      }
    }
    #currentPrice {
      height: ${px2vw(60)};
      align-items: center;
      padding-top: ${px2vw(10)};
    }
  }
`;
