import styled from "styled-components";
import px2vw from "../../Utils/px2vw";

export const Container = styled.div`
  width: ${px2vw(1380)};
  height: ${px2vw(530)};
  display: flex;

  /* Responsividade */
  @media (max-width: 425px) {
    height: ${px2vw(900)};
    flex-direction: column;
    align-items: center;
    margin-bottom: ${px2vw(100)};
  }
`;
export const BoxImage = styled.div`
  width: ${px2vw(950)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${px2vw(16)} ${px2vw(32)};

  /* Responsividade */
  @media (max-width: 425px) {
    width: ${px2vw(1050)};
    padding: ${px2vw(16)} ${px2vw(16)};
  }
`;

export const ImageGame = styled.img`
  width: 100%;
  height: 100%;
`;

export const BoxCards = styled.div`
  display: flex;
  flex-direction: column;
  width: ${px2vw(450)};
  align-items: center;

  /* Responsividade */
  @media (max-width: 425px) {
    flex-direction: row;
    width: ${px2vw(1370)};
    justify-content: center;
    height: ${px2vw(350)};
  }
`;
