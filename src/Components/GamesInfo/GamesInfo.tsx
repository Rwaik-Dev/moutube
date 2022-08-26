import React from "react";
import { Container } from "./GamesInfo.style";
import { Link } from "react-router-dom";

interface IPropsGamesInfo {
  imageUrl: string;
  gameName: string;
  information?: string;
  gameSlug: string;
}

const GamesInfo: React.FC<IPropsGamesInfo> = ({
  imageUrl,
  gameName,
  information,
  gameSlug,
}) => {
  return (
    <Container>
      <Link
        to={`detail-game/` + gameSlug}
        key={gameSlug}
        style={{
          height: "100%",
          width: "100%",
          background: "none",
          display: "flex",
          textDecoration: "none",
        }}
      >
        <>
          <img src={imageUrl} alt="" className="imageUrl" />
          <div className="informations">
            <h5 className="gameName">{gameName}</h5>
            <p className="informationGame">{information}</p>
          </div>
        </>
      </Link>
    </Container>
  );
};

export default GamesInfo;
