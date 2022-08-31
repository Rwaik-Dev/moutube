import px2vw from "../../Utils/px2vw";
import styled from "styled-components";

export const Container = styled.div`
  width: ${px2vw(530)};
  height: ${px2vw(520)};
  background: none;
h5{
    margin-bottom:${px2vw(15)} ;
    background: none;
    font-size: ${px2vw(16)};
}
  .title {
    color: rgba(245, 245, 245, 0.664);
    font-size: ${px2vw(16)};
    background: none;
    @media (max-width: 425px){
    font-size: ${px2vw(24)};
    }
  }
  .divider {
    width: ${px2vw(530)};
    height: ${px2vw(80)};
    background: none;
    @media (max-width: 425px){
    font-size: ${px2vw(20)};
    }
  }
  .name{
    background: none;
  }
`;
