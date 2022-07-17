import React from "react";
import { Container, Display } from "./MainPages.styles";
import Header from "../../Components/Header/Header";
import DisplayGame from "../../Components/DisplayGame/DisplayGame";
import PromotionsCard from "../../Components/PromotionCard/PromotionsCard";
import GamesTrack from "../../Components/GamesTrack/GamesTrack";
import FreeGames from "../../Components/FreeGames/FreeGames";
import TopGames from "../../Components/TopGames/TopGames";

const MainPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Display>
        <DisplayGame />
        <PromotionsCard/>
        <GamesTrack/>
        <FreeGames/>
        <TopGames/>
      </Display>
    </Container>
  );
};

export default MainPage;
