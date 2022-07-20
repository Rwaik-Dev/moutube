import styled from "styled-components";
import px2vw from "../../Utils/px2vw";

export const Container = styled.div`
  width: 100%;
  margin-top: ${px2vw(32)};
  height: ${px2vw(400)};
  a{
    text-decoration: none;
    :hover {
      transition: all 0.3s;
      color: #01c38d;
    }
  }
`;

export const BoxHead = styled.div`
  height: ${px2vw(370)} ;
  margin-top: ${px2vw(10)};
  display: flex ;
`;
