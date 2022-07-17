import styled from "styled-components";

export const Container = styled.div`
  width: 20em;
  height: 22em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  #imageGame {
    width: 100%;
    height: 10em;
    border-radius: 20px ;
  }
  #description {
    height: 6em;
    padding: 0.6em;
    font-size: 0.9rem;
  }
  #gameName {
    height: 1em;
    font-weight: bold;
  }
  #currentPrice {
    height: 1em;
    padding: 0.6em;
  }
`;
