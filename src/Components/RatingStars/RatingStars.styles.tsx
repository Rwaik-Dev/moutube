import styled from "styled-components";
import px2vw from "../../Utils/px2vw";

export const Container = styled.div`
  width: ${px2vw(1330)};
  height: ${px2vw(80)};
  display: flex;
  justify-content: center;
  align-items: center;

  > h2 {
    font-size: ${px2vw(40)};
    margin-right: ${px2vw(10)};
  }

  .iconStyle {
    font-size: ${px2vw(48)};
    margin: ${px2vw(5)};
  }
`;
