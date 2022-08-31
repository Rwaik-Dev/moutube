import styled from "styled-components";
import px2vw from "../../Utils/px2vw";

export const Container = styled.div`
  width: ${px2vw(1330)};
`;
export const GameContent = styled.div`
  width: ${px2vw(1330)};
  margin-bottom: ${px2vw(15)};
`;
export const MediaGame = styled.div`
  width: ${px2vw(1330)};
  height: ${px2vw(500)};
  display: flex;
  @media (max-width: 425px) {
    height: ${px2vw(1060)};
    flex-direction: column;
    align-items: center;
  }
`;
export const ImageCarrossel = styled.div`
  width: ${px2vw(900)};

  img {
    width: 100%;
    height: ${px2vw(450)};
  }
  @media (max-width: 425px) {
    width: ${px2vw(1080)};
    height: ${px2vw(550)};
  }
`;
export const DivImages = styled.div`
  margin-top: ${px2vw(5)};
  height: ${px2vw(60)};
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    width: ${px2vw(100)};
    height: ${px2vw(55)};
    border-radius: ${px2vw(5)};
    img {
      width: 100%;
      height: 100%;
      border-radius: ${px2vw(5)};
    }
  }

  @media (max-width: 425px) {
    height: ${px2vw(90)};
    margin-top: ${px2vw(0)};
    div {
      width: ${px2vw(125)};
      height: ${px2vw(70)};
    }
  }
`;

export const GameInfo = styled.div`
  width: ${px2vw(430)};
  height: ${px2vw(500)};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 425px) {
    height: ${px2vw(400)};
    width: ${px2vw(1080)};
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export const Divisor = styled.div`
  width: ${px2vw(370)};
  height: ${px2vw(500)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: ${px2vw(350)};
    height: ${px2vw(150)};
  }
  h4 {
    width: ${px2vw(370)};
    height: ${px2vw(40)};
  }
  button {
    height: ${px2vw(30)};
    margin: ${px2vw(5)} 0;
    width: ${px2vw(350)};
    border: unset;
    border-radius: 5px;
    color: #fff;
    z-index: 1;
    position: relative;
    font-weight: 700;
    font-size: ${px2vw(14)};
    -webkit-box-shadow: 4px 8px 19px -3px rgba(20, 20, 20, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.384);
    transition: all 250ms;
    overflow: hidden;

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0;
      border-radius: 5px;
      background-color: #01d197;
      z-index: -1;
      -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      transition: all 250ms;
    }
    :hover {
      color: #fff;
    }
    :hover::before {
      width: 100%;
    }
  }

  @media (max-width: 425px) {
    width: ${px2vw(500)};
    height: ${px2vw(400)};
    margin-right: ${px2vw(25)};
    img {
      width: ${px2vw(450)};
      height: ${px2vw(150)};
    }
    h4 {
      width: ${px2vw(450)};
      height: ${px2vw(40)};
      font-size: ${px2vw(25)};
    }
    button {
      height: ${px2vw(50)};
      margin: ${px2vw(5)} 0;
      width: ${px2vw(450)};
      font-size: ${px2vw(25)};
    }
  }
`;
export const Informations = styled.div`
  height: ${px2vw(250)};
  width: ${px2vw(370)};

  @media (max-width: 425px) {
    width: ${px2vw(500)};
    height: ${px2vw(400)};
    margin-top: ${px2vw()};
  }

  .informationDivStyle {
    height: ${px2vw(30)};
    margin-bottom: ${px2vw(5)};
    border-bottom: solid 1px rgba(245, 245, 245, 0.6);
    width: ${px2vw(370)};
    display: flex;
    justify-content: space-between;
    @media (max-width: 425px) {
      height: ${px2vw(70)};
      width: ${px2vw(450)};
    }
    p {
      height: ${px2vw(27)};
      width: ${px2vw(180)};
      font-size: ${px2vw(14)};
      padding-top: ${px2vw(13)};
      @media (max-width: 425px) {
        height: ${px2vw(35)};
        width: ${px2vw(225)};
        font-size: ${px2vw(22)};
        padding-top: ${px2vw(15)};
      }
    }
    .pTitle {
      color: rgba(245, 245, 245, 0.411);
    }
  }
  .pStyles {
    text-align: end;
    padding-right: ${px2vw(5)};
    color: #fff;
  }
`;

export const DetailGameInformation = styled.div`
  width: ${px2vw(1330)};
  margin-top: ${px2vw(20)};
  @media (max-width: 425px) {
    margin-top: ${px2vw(0)};
  }
  > h4 {
    margin: ${px2vw(5)} 0;
    font-size: ${px2vw(18)};
    @media (max-width: 425px) {
      font-size: ${px2vw(38)};
    }
  }
  > p {
    margin: 0 ${px2vw(10)};
    font-size: ${px2vw(15)};
    border-bottom: solid 2px rgba(245, 245, 245, 0.411);
    @media (max-width: 425px){
    border-bottom: solid ${px2vw(5)} rgba(245, 245, 245, 0.411);
    font-size: ${px2vw(24)};
    }
  }
`;
export const GameRating = styled.div`
  width: ${px2vw(1330)};
  margin-top: ${px2vw(8)};
  border-bottom: solid ${px2vw(5)} rgba(245, 245, 245, 0.411);

  small {
    font-size: ${px2vw(10)};
    @media (max-width: 425px){
    font-size: ${px2vw(20)};
    }
  }
  .positionGroup {
    width: ${px2vw(1330)};
    margin: 0 ${px2vw(10)};
    color: rgba(245, 245, 245, 0.411);
  }
`;
export const GameEspecifications = styled.div`
  width: ${px2vw(1330)};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${px2vw(10)};

  h4 {
    width: 100%;
    margin-bottom: ${px2vw(20)};
    @media (max-width: 425px){
      font-size: ${px2vw(38)} ;
    }
  }
`;
export const SpeceficationBox = styled.div`
  width: ${px2vw(1100)};
  height: ${px2vw(600)};
  background-color: #00ffb73d;
  border-radius: ${px2vw(8)};
  padding: ${px2vw(20)};

  .divTitle {
    background: none;
    width: ${px2vw(1060)};
    border-bottom: solid 2px rgba(245, 245, 245, 0.411);
  }
  h3 {
    background: none;
    width: ${px2vw(90)};
    border-bottom: solid;
    text-align: center;
  }
`;

export const Require = styled.div`
  width: ${px2vw(1060)};
  height: ${px2vw(520)};
  display: flex;
  margin-top: ${px2vw(5)};
  background: none;
`;
