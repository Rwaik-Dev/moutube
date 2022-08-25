import React from "react";
import { Container } from "./RatingStars.styles";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";

interface IRatingStarsProps {
  rating: string | undefined;
}

const RatingStars: React.FC<IRatingStarsProps> = ({ rating }) => {
  if (rating === "0") {
    return (
      <Container>
        <h2>0</h2> <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
      </Container>
    );
  }
  if (rating === "0.5") {
    return (
      <Container>
        <h2>0.5</h2> <ImStarHalf className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
      </Container>
    );
  }
  if (rating === "1") {
    return (
      <Container>
        {" "}
        <h2>1</h2> <ImStarFull className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
      </Container>
    );
  }
  if (rating === "1.5") {
    return (
      <Container>
        {" "}
        <h2>1.5</h2> <ImStarFull className="iconStyle" />
        <ImStarHalf className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />{" "}
      </Container>
    );
  }
  if (rating === "2") {
    return (
      <Container>
        {" "}
        <h2>2</h2> <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />{" "}
      </Container>
    );
  }
  if (rating === "2.5") {
    return (
      <Container>
        {" "}
        <h2>2.5</h2> <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />
        <ImStarHalf className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />{" "}
      </Container>
    );
  }
  if (rating === "3") {
    return (
      <Container>
        {" "}
        <h2>3</h2> <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />
        <ImStarEmpty className="iconStyle" />
        <ImStarEmpty className="iconStyle" />{" "}
      </Container>
    );
  }
  if (rating === "3.5") {
    return (
      <Container>
        {" "}
        <h2>3.5</h2> <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />
        <ImStarHalf className="iconStyle" />
        <ImStarEmpty className="iconStyle" />{" "}
      </Container>
    );
  }
  if (rating === "4") {
    return (
      <Container>
        {" "}
        <h2>4</h2> <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />
        <ImStarEmpty className="iconStyle" />{" "}
      </Container>
    );
  }
  if (rating === "4.5") {
    return (
      <Container>
        {" "}
        <h2>4.5</h2> <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />
        <ImStarHalf className="iconStyle" />{" "}
      </Container>
    );
  }
  if (rating === "5") {
    return (
      <Container>
        {" "}
        <h2>5</h2> <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />
        <ImStarFull className="iconStyle" />{" "}
      </Container>
    );
  } else
    return (
      <Container>
        <h2>Sem Classificação</h2>
      </Container>
    );
};

export default RatingStars;
