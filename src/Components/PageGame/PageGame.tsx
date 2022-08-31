import React, { useState } from "react";
import RatingStars from "../RatingStars/RatingStars";
import Requirements from "../Requirements/Requirements";
import { getGames } from "../../Utils/data";
import { useParams } from "react-router-dom";
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
  Require,
} from "./PageGame.styles";

const PageGame: React.FC = () => {
  let params = useParams();
  let listGame = getGames(params.gameId);

  const [sourceImage, setSourceImage] = useState(listGame?.UrlImageCarrossel1);

  return (
    <Container>
      <GameContent>
        <h1>{listGame?.gameName}</h1>
      </GameContent>
      <MediaGame>
        <ImageCarrossel>
          <img src={sourceImage} alt={listGame?.gameName} />
          <DivImages>
            <div>
              <img
                src={listGame?.UrlImageCarrossel1}
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(listGame?.UrlImageCarrossel1);
                }}
              />
            </div>
            <div>
              <img
                src={listGame?.UrlImageCarrossel2}
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(listGame?.UrlImageCarrossel2);
                }}
              />
            </div>
            <div>
              <img
                src={listGame?.UrlImageCarrossel3}
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(listGame?.UrlImageCarrossel3);
                }}
              />
            </div>
            <div>
              <img
                src={listGame?.UrlImageCarrossel4}
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(listGame?.UrlImageCarrossel4);
                }}
              />
            </div>
            <div>
              <img
                src={listGame?.UrlImageCarrossel5}
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(listGame?.UrlImageCarrossel5);
                }}
              />
            </div>
            <div>
              <img
                src={listGame?.UrlImageCarrossel6}
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(listGame?.UrlImageCarrossel6);
                }}
              />
            </div>
            <div>
              <img
                src={listGame?.UrlImageCarrossel7}
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(listGame?.UrlImageCarrossel7);
                }}
              />
            </div>
            <div>
              <img
                src={listGame?.UrlImageCarrossel8}
                alt="Logo Game"
                onClick={() => {
                  setSourceImage(listGame?.UrlImageCarrossel8);
                }}
              />
            </div>
          </DivImages>
        </ImageCarrossel>
        <GameInfo>
          <Divisor>
            <img
              src={listGame?.UrlImageLogo}
              alt={`Logo do jogo ` + listGame?.gameName}
              width="100%"
            />
            <h4>Gratuito</h4>
            <button className="actionButton">Comprar</button>
            <button className="actionButton">Adicionar ao Carrinho</button>
            <button className="actionButton">
              Adicionar a Lista de Desejo
            </button>
          </Divisor>
          <Informations>
            <div className="informationDivStyle">
              <p className="pTitle">Desenvolvedor</p>{" "}
              <p className="pStyles">{listGame?.desenvolvedor}</p>
            </div>
            <div className="informationDivStyle">
              <p className="pTitle">Editora</p>{" "}
              <p className="pStyles">{listGame?.editora}</p>
            </div>
            <div className="informationDivStyle">
              <p className="pTitle">Data de Lançamento</p>{" "}
              <p className="pStyles">{listGame?.dataLancamento}</p>
            </div>
            <div className="informationDivStyle">
              <p className="pTitle">Lançamento inicial</p>{" "}
              <p className="pStyles">{listGame?.lancamentoInicial}</p>
            </div>
            <div className="informationDivStyle">
              <p className="pTitle">Plataforma</p>{" "}
              <p className="pStyles">{listGame?.plataforma}</p>
            </div>
          </Informations>
        </GameInfo>
      </MediaGame>
      <DetailGameInformation>
        <h4>Descrição</h4>
        <p>{listGame?.descricao}</p>
        <GameRating>
          <RatingStars rating={listGame?.classificacao} />
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
              <Requirements
                title="Minimo"
                So={listGame?.especificacoes.minimo.sistemaOperacional}
                processador={listGame?.especificacoes.minimo.processador}
                memory={listGame?.especificacoes.minimo.memoria}
                storage={listGame?.especificacoes.minimo.armazenamento}
                directX={listGame?.especificacoes.minimo.directX}
                videoCard={listGame?.especificacoes.minimo.placaDeVideo}
              />
              <Requirements
                title="Recomendado"
                So={listGame?.especificacoes.recomendado.sistemaOperacional}
                processador={listGame?.especificacoes.recomendado.processador}
                memory={listGame?.especificacoes.recomendado.memoria}
                storage={listGame?.especificacoes.recomendado.armazenamento}
                directX={listGame?.especificacoes.recomendado.directX}
                videoCard={listGame?.especificacoes.recomendado.placaDeVideo}
              />
            </Require>
          </SpeceficationBox>
        </GameEspecifications>
      </DetailGameInformation>
    </Container>
  );
};

export default PageGame;
