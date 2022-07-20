import styled from "styled-components";
import px2vw from "../../Utils/px2vw";

interface IPropsContainer {
  backgroundColor: string;
}

export const Container = styled.div<IPropsContainer>`
  width: ${px2vw(320)};
  height: ${px2vw(375)};
  margin: 0 ${px2vw(10)} ;
  background: none;

  .imageGame {
    width: 100%;
    height: ${px2vw(300)};
  }
  .iconFree {
    width: 100%;
    height: ${px2vw(20)};
    font-weight: bold;
    text-align: center;
    background-color: ${(props) => props.backgroundColor};
  }
  .gameName {
    width: 100%;
    height: ${px2vw(25)};
    padding-top: ${px2vw(1.5)} ;
    font-size: ${px2vw(16)};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center ;
    background: none ;

  }
  .infoPrice {
    width: 100%;    
    height: ${px2vw(25)};
    padding-top: ${px2vw(1.5)} ;
    text-align: center ;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    background: none ;
  }
`;
