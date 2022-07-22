import styled from "styled-components";
import px2vw from "../../Utils/px2vw";

export const Container = styled.div`
  margin-top: ${px2vw(54)};
  display: flex;
  justify-content: space-between;
  width: ${px2vw(1320)};
  height: ${px2vw(765)} ;

  @media(max-width:425px){
    flex-direction: column ;
    height: ${px2vw(1200)} ;
  }
`;
export const Title = styled.h3`
  height: ${px2vw(40)} ;
  font-size: ${px2vw(28)} ;
  @media(max-width: 425px){
    font-size: ${px2vw(40)} ;
  }
`;
export const SeparatorBox = styled.div`
  display: flex ;
  flex-direction:column ;
  justify-content: space-between ;
  height: ${px2vw(700)} ;

  @media(max-width:425px){
    height: ${px2vw(360)} ;
    flex-direction: row ;
    flex-wrap: wrap ;
    justify-content: space-evenly ;
    align-items:center ;
  }

`;

export const NewGames = styled.div`
  width: ${px2vw(420)};

  @media(max-width: 425px){
    height: ${px2vw(400)}  ;
    width: ${px2vw(1315)} ;
    display: flex ;
    flex-direction: column;
  }
`;
export const BestSellers = styled.div`
  width: ${px2vw(420)};

  @media(max-width: 425px){
    height: ${px2vw(400)}  ;
    width: ${px2vw(1315)} ;
    display: flex ;
    flex-direction: column;
  }

`;
export const Incoming = styled.div`
  width: ${px2vw(420)};

  @media(max-width: 425px){
    height: ${px2vw(400)}  ;
    width: ${px2vw(1315)} ;
    display: flex ;
    flex-direction: column;
  }
`;
