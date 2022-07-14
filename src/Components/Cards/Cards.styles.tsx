import styled from "styled-components";

export const Container = styled.div`
  border-radius: 15px;
  padding: 10px;
  background-size: 100%;
  width: 70%;
  height: 25%;
  margin: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    transition: all 0.5s;
    /* background-color: #01c38d; */
    background: linear-gradient(145deg, #01d197, #01b07f);
    box-shadow: 5px 5px 10px #017152;
  }

  .imageCard {
    width: 30%;
    height: 100%;
    background: none;
  }
  .gameName {
    width: 70%;
    height: auto;
    padding: 0.5rem;
    background: none;
  }
`;
