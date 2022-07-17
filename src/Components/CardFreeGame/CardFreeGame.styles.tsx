import styled from "styled-components";

interface IPropsContainer {
  backgroundColor: string;
}

export const Container = styled.div<IPropsContainer>`
  width: 25%;
  height: 20rem;
  margin: 1em;
  background: none;

  .imageGame {
    width: 100%;
    height: 85%;
  }
  .iconFree {
    width: 100%;
    height: 5%;
    font-size: 0.8em;
    font-weight: bold;
    text-align: center;
    background-color: ${(props) => props.backgroundColor};
    padding: 0.1em;
  }
  .gameName {
    width: 100%;
    height: 5%;
    font-size: .9em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center ;
    background: none ;

  }
  .infoPrice {
    width: 100%;
    height: 7%;
    padding-top: 1.5% ;
    text-align: center ;
    font-size: .8em ;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    background: none ;
  }
`;
