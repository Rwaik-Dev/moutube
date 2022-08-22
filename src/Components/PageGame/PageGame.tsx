import React, { useState } from "react";
import RatingStars from "../RatingStars/RatingStars";
import Requirements from "../Requirements/Requirements";
import {
  Container,
  GameContent,
  MediaGame,
  ImageCarrossel,
  GameInfo,
  Divisor,
  Informations,
  DivImages,
  DetailGameInformation,
  GameRating,
  GameEspecifications,
  SpeceficationBox,
  Require
} from "./PageGame.styles";

const PageGame: React.FC = () => {
  const [sourceImage, setSourceImage] = useState(
    "https://store-images.s-microsoft.com/image/apps.16695.14150134713361479.615a9379-1995-470a-85bc-b8a5e50461b0.b7c50bac-287c-40e4-b43f-7dbac543b3c3?q=90&w=480&h=270"
  );

  return (
    <Container>
      <GameContent>
        <h1>Destiny 2</h1>
      </GameContent>
      <MediaGame>
        <ImageCarrossel>
          <img src={sourceImage} alt="Destiny 2" />
          <DivImages>
            <div>
              <img
                src="https://store-images.s-microsoft.com/image/apps.16695.14150134713361479.615a9379-1995-470a-85bc-b8a5e50461b0.b7c50bac-287c-40e4-b43f-7dbac543b3c3?q=90&w=480&h=270"
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(
                    "https://store-images.s-microsoft.com/image/apps.16695.14150134713361479.615a9379-1995-470a-85bc-b8a5e50461b0.b7c50bac-287c-40e4-b43f-7dbac543b3c3?q=90&w=480&h=270"
                  );
                }}
              />
            </div>
            <div>
              <img
                src="https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/ss_7fcc82f468fcf8278c7ffa95cebf949bfc6845fc.1920x1080.jpg?t=1657835870"
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(
                    "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/ss_7fcc82f468fcf8278c7ffa95cebf949bfc6845fc.1920x1080.jpg?t=1657835870"
                  );
                }}
              />
            </div>
            <div>
              <img
                src="https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/ss_a35aaa73e605c0738a53a74abbcb53768e8f39e1.1920x1080.jpg?t=1657835870"
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(
                    "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/ss_a35aaa73e605c0738a53a74abbcb53768e8f39e1.1920x1080.jpg?t=1657835870"
                  );
                }}
              />
            </div>
            <div>
              <img
                src="https://mundodrix.com.br/site/wp-content/uploads/2021/04/Destiny-2-Jogos-dos-Guardi%C3%B5es-2021-3.jpg"
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(
                    "https://mundodrix.com.br/site/wp-content/uploads/2021/04/Destiny-2-Jogos-dos-Guardi%C3%B5es-2021-3.jpg"
                  );
                }}
              />
            </div>
            <div>
              <img
                src="https://files.tecnoblog.net/wp-content/uploads/2021/08/destiny-2-2.jpg"
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(
                    "https://files.tecnoblog.net/wp-content/uploads/2021/08/destiny-2-2.jpg"
                  );
                }}
              />
            </div>
            <div>
              <img
                src="https://gmedia.playstation.com/is/image/SIEPDC/Destiny-2-screen-03-en-30sep21?$native$"
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(
                    "https://gmedia.playstation.com/is/image/SIEPDC/Destiny-2-screen-03-en-30sep21?$native$"
                  );
                }}
              />
            </div>
            <div>
              <img
                src="https://xboxplay.games/uploadStream/20456.jpg"
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(
                    "https://xboxplay.games/uploadStream/20456.jpg"
                  );
                }}
              />
            </div>
            <div>
              <img
                src="https://www.ultimaficha.com.br/wp-content/uploads/2022/02/the-witch-queen.jpeg"
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(
                    "https://www.ultimaficha.com.br/wp-content/uploads/2022/02/the-witch-queen.jpeg"
                  );
                }}
              />
            </div>
          </DivImages>
        </ImageCarrossel>
        <GameInfo>
          <Divisor>
            <img
              src="https://store-images.s-microsoft.com/image/apps.16695.14150134713361479.615a9379-1995-470a-85bc-b8a5e50461b0.b7c50bac-287c-40e4-b43f-7dbac543b3c3?q=90&w=480&h=270"
              alt="Logo Game"
            />
            <h4>Gratuito</h4>
            <button className="actionButton">Comprar</button>
            <button className="actionButton">Adicionar ao Carrinho</button>
            <button className="actionButton">
              Adicionar a Lista de desejo
            </button>
          </Divisor>
          <Informations>
            <div className="informationDivStyle">
              <p className="pTitle">Desenvolvedor</p>{" "}
              <p className="pStyles">Bungie</p>
            </div>
            <div className="informationDivStyle">
              <p className="pTitle">Editora</p>{" "}
              <p className="pStyles">Bungie</p>
            </div>
            <div className="informationDivStyle">
              <p className="pTitle">Data de Lançamento</p>{" "}
              <p className="pStyles">06/09/2017</p>
            </div>
            <div className="informationDivStyle">
              <p className="pTitle">Lançamento inicial</p>{" "}
              <p className="pStyles">28/08/2017</p>
            </div>
            <div className="informationDivStyle">
              <p className="pTitle">Plataforma</p>{" "}
              <p className="pStyles">Xbox</p>
            </div>
          </Informations>
        </GameInfo>
      </MediaGame>
        <DetailGameInformation>
          <h4>Descrição</h4>
          <p>
            Mergulhe no mundo de Destiny 2 para explorar os mistérios do sistema
            solar e vivenciar combates de tiro em primeira pessoa. Libere
            poderosas habilidades elementares, colecione equipamentos singulares
            para personalizar o visual e estilo de jogo do seu Guardião.
            Vivencie a história cinematográfica de Destiny 2, missões
            cooperativas desafiadoras, e competições em diversos modos PvP, só
            ou com amigos. Baixe gratuitamente e escreva sua lenda nas estrelas.
          </p>
          <GameRating>
            <RatingStars rating="4.5" />
            <small className="positionGroup">
              *Classificação dos jogadores da MouTube
            </small>
          </GameRating>
          <GameEspecifications>
            <h4>Especificações</h4>
            <SpeceficationBox>
              <div className="divTitle">
                <h3>Windows</h3>
              </div>
              <Require>
                <Requirements title="Minimo" So="Windows 10 de 64 bits" processador="Intel Core i3-4160 ou AMD equivalente" memory="8" storage="75" directX="12" videoCard="NVIDIA GTX 950 ou AMD Radeon RX 470"/>
                <Requirements title="Recomendado" So="Windows 10 de 64 bits" processador="Intel Core i5-8160 ou AMD equivalente" memory="16" storage="100" directX="12" videoCard="	NVIDIA® GeForce® GTX 970 4GB or GTX 1060 6GB ou AMD R9 390 8GB Memory 8 GB RAM"/>
              </Require>
            </SpeceficationBox>
          </GameEspecifications>
        </DetailGameInformation>
    </Container>
  );
};

export default PageGame;
