import React, { useContext } from "react";
import { GameContext } from "../../context/gameContext";
import { ScoreContainer } from "./styles";

export default function Score() {
  const { score } = useContext(GameContext);
  return (
    <ScoreContainer>
      <span>SCORE</span>
      <h2>{score}</h2>
    </ScoreContainer>
  );
}
