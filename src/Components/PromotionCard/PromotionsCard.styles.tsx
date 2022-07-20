import styled from "styled-components";
import px2vw from "../../Utils/px2vw";

export const Container = styled.div`
  width: 100%;
  margin-top: ${px2vw(32)};
  height: ${px2vw(400)};
  a {
    font-size: ${px2vw(22)} ;
    font-weight: bold;
    text-decoration: none;
    :hover {
      transition: all 0.3s;
      color: #01c38d;
    }
    /* Responsividade */

    @media (max-width: 425px) {
      font-size: ${px2vw(50)};
    }
  }
  @media (max-width: 425px) {
    height: ${px2vw(1700)};
  }
`;

export const BoxHead = styled.div`
  height: ${px2vw(1570)};
  margin-top: ${px2vw(10)};
  display: flex;

  /* Responsividade */
  @media (max-width: 425px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
