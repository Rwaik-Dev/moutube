import React from "react";
import { Container, Content } from "./DetailGame.style";
import PageGame from "../../Components/PageGame/PageGame";
import GlobalStyles from "../../styles/styles";
import Header from "../../Components/Header/Header";


const DetailGame: React.FC = () => {
  return (
    <>
    <GlobalStyles/>
      <Container>
        <Header/>
        <Content>
          <PageGame/>
        </Content>
      </Container>
    </>
  );
};

export default DetailGame;
