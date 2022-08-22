import px2vw from "../../Utils/px2vw";
import styled from "styled-components";

export const Container = styled.div`
  width: ${px2vw(530)};
  height: ${px2vw(520)};
  background: none;
h5{
    margin-bottom:${px2vw(15)} ;
}
  .title {
    color: rgba(245, 245, 245, 0.664);
    font-size: ${px2vw(16)};
    background: none;
  }
  .divider {
    width: ${px2vw(530)};
    height: ${px2vw(80)};
    background: none;
  }
  .name{
    background: none;
  }
`;
