import styled from "styled-components";
import px2vw from "../../Utils/px2vw";

export const Container = styled.div`
  width: ${px2vw(418)};
  height: ${px2vw(120)};
  margin: ${px2vw(5)} 0;
  border-radius: ${px2vw(5)};
  display: flex;
  align-items: center;
  @media(max-width:425px){
    width: ${px2vw(410)};
    height: ${px2vw(165)};
    margin: 0 ;
  }

  :hover {
    transition: all 0.6s;
    background-color: #01c38d;
  }
  .informations {
    height: ${px2vw(120)};
    width: ${px2vw(290)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: none;
  }
  .imageUrl {
    width: ${px2vw(130)};
    height: ${px2vw(120)};
    padding: ${px2vw(3)} ;
    border-radius: ${px2vw(5)};
    background: none;
  }
  .gameName {
    width: ${px2vw(250)} ;
    margin-left: ${px2vw(10)};
    background: none;
    font-size: ${px2vw(16)} ;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .informationGame {
    margin-left: ${px2vw(10)};
    margin-top: ${px2vw(8)};
    width: ${px2vw(250)} ;
    font-size: ${px2vw(14)} ;
    background: none;
  }
`;
