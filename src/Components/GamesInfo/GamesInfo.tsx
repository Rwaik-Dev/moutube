import React from "react";
import { Container } from "./GamesInfo.style";

interface IPropsGamesInfo {
  imageUrl: string;
  gameName: string;
  information?: string;
}

const GamesInfo: React.FC<IPropsGamesInfo> = ({
  imageUrl,
  gameName,
  information,
}) => {
  return (
    <Container>
      <img src={imageUrl} alt="" width={"100%"} className="imageUrl" />
      <div className="informations">
        <h5 className="gameName">{gameName}</h5>
        <p className="informationGame">{information}</p>
      </div>
    </Container>
  );
};

export default GamesInfo;
