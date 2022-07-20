import styled from "styled-components";
import px2vw from "../../Utils/px2vw";
export const Container = styled.div`
  width: 100%;
  height: ${px2vw(400)} ;
  display: flex;
  justify-content: space-evenly;
  align-items: center ;

  @media(max-width: 425px){
    
    margin-top: ${px2vw(35)};
    height: ${px2vw(500)} ;

    /*
    flex-direction: column ;
    flex-wrap: wrap ;

    border: solid 1px red; */
  }

  border: solid 1px ;
`;
