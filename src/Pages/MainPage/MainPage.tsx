import React from "react";
import { Container, Display } from "./MainPages.styles";
import Header from "../../Components/Header/Header";
import DisplayGame from "../../Components/DisplayGame/DisplayGame";
import PromotionsCard from "../../Components/PromotionCard/PromotionsCard";

const MainPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Display>
        <DisplayGame />
        <PromotionsCard/>
      </Display>
    </Container>
  );
};

export default MainPage;
