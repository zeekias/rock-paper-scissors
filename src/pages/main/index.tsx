import React, { useState } from "react";
import Options from "../../components/options/Options";
import {Rules} from "../../components/rules/Rules";
import TitleAndScore from "../../components/title-and-score/TitleAndScore";
import { GameContextProvider } from "../../context/gameContext";
import { Container, RulesContainer } from "./styles";

export default function Main() {
  const [showRules, setShowRules] = useState(false);

  const handleShowRules = ()=>{
    setShowRules(!showRules);
  }

  return (
    <Container>
        {showRules ? <Rules handleShowRules={handleShowRules} /> : <></>}
      <GameContextProvider>
        <TitleAndScore />
        <Options />
        <RulesContainer>
          <button onClick={()=>handleShowRules()}>RULES</button>
        </RulesContainer>
      </GameContextProvider>
    </Container>
  );
}
