import React, { useContext, useEffect, useState } from "react";
import { GameContext, GameContextProvider } from "../../context/gameContext";
import { Option, OptionsContainer } from "./styles";

export default function Options() {
  const { user, handleUserOption, house, result } = useContext(GameContext);
 
  function handleChosenOption() {
    const size = "250px";
    return (
      <OptionsContainer width="100%">
        <div className={`user-option ${result.winner === 1 && "winner"}`}>
          <h2>YOU PICKED</h2>
          <Option color={user.optionPicked.localColor} size={size}>
            <img src={user.optionPicked.imgSrc} alt="Option Choosed" />
          </Option>
        </div>
        <div className="game-result">
          <h2>{result.info}</h2>
          <button onClick={() => handleUserOption(-1)}>
            <span> PLAY AGAIN</span>
          </button>
        </div>
        <div className={`house-option ${result.winner === 2 && "winner"}`}>
          <h2>THE HOUSE PICKED</h2>
          <Option color={house.optionPicked.localColor} size={size}>
            <img src={house.optionPicked.imgSrc} alt="Option Choosed" />
          </Option>
        </div>
      </OptionsContainer>
    );
  }

  return (
    <>
      {user.optionPicked.id === -1 ? (
        <OptionsContainer width="450px">
          <div className="options">
            <Option
              color="hsl(230, 89%, 62%)"
              size="150px"
              onClick={() => handleUserOption(1)}
            >
              <img src="/images/icon-paper.svg" alt="Paper" />
            </Option>
            <Option
              color="hsl(39, 89%, 49%)"
              size="150px"
              onClick={() => handleUserOption(2)}
            >
              <img src="/images/icon-scissors.svg" alt="Scissors" />
            </Option>
            <Option
              color="hsl(349, 71%, 52%)"
              size="150px"
              onClick={() => handleUserOption(3)}
            >
              <img src="/images/icon-rock.svg" alt="Rock" />
            </Option>
          </div>
        </OptionsContainer>
      ) : (
        <>{handleChosenOption()}</>
      )}
     
    </>
  );
}
