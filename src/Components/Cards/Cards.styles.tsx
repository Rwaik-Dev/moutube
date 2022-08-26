import styled from "styled-components";
import px2vw from "../../Utils/px2vw";

export const Container = styled.div`
  border-radius: ${px2vw(15)};
  padding: ${px2vw(10)};
  background-size: 100%;
  width: ${px2vw(280)};
  height: ${px2vw(170)};
  margin: ${px2vw(8)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    transition: all 0.5s;
    background: linear-gradient(145deg, #01d197, #01b07f);
    box-shadow: ${px2vw(5)} ${px2vw(5)} ${px2vw(10)} #017152;
  }

  .imageCard {
    width: ${px2vw(80)};
    height: ${px2vw(70)};
    background: none;
  }
  .gameName {
    width: ${px2vw(160)};
    height: auto;
    padding: ${px2vw(10)};
    background: none;
    font-size: ${px2vw(25)};
  }

  /* Responsividade */
  @media (max-width: 425px) {
    width: ${px2vw(300)};
    height: ${px2vw(150)};
    margin: ${px2vw(16)};
    .imageCard {
      width: ${px2vw(130)};
      height: ${px2vw(130)};
    }
    .gameName {
      width: ${px2vw(170)};
      font-size: ${px2vw(35)};
    }
  }
`;
