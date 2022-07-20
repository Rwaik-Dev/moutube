import React from "react";
import CardGames from "../CardGames/CardGames";
import { BoxHead, Container } from "./PromotionsCard.styles";

const PromotionsCard: React.FC = () => {
  return (
    <Container>
      <div className="promotionsGames">
        <a href="http://" >
          Jogos em promoção
        </a>
      </div>
      <BoxHead>
        <CardGames
          urlImage="https://image.api.playstation.com/cdn/UP0001/CUSA05855_00/8V1jOJ0Nm8UbF6bsZOGIwFjAmAODJ0pG.png"
          gameName="Assassin's Creed Origins"
          discount={50}
          lastPrice="199,00"
          currentPrice="99,00"
        />
        <CardGames
          urlImage="https://image.api.playstation.com/vulcan/ap/rnd/202105/1919/TQPQtelumFuvM4njKGjgJHQP.png"
          gameName="Rainbow Six Extraction"
          discount={60}
          lastPrice="220,00"
          currentPrice="88,00"
        />
        <CardGames
          urlImage="https://image.api.playstation.com/vulcan/img/rnd/202010/0818/HVUPJTyjOslwxbwCC8edPC45.png"
          gameName="Ark Survival Evolved"
          discount={30}
          lastPrice="80,00"
          currentPrice="56,00"
        />
        <CardGames
          urlImage="https://assets-prd.ignimgs.com/2022/05/17/downhill-domination-button-1652747391683.jpg"
          gameName="Downhill Domination"
          discount={80}
          lastPrice="25,00"
          currentPrice="5,00"
        />
        <CardGames
          urlImage="https://image.api.playstation.com/cdn/UP0001/CUSA04459_00/KVnEezbiQaL59eySNXBB1csp9OyhMyjB.png"
          gameName="Watch Dogs 2 - Gold Edition"
          discount={70}
          lastPrice="150,00"
          currentPrice="45,00"
        />
      </BoxHead>
    </Container>
  );
};

export default PromotionsCard;
