import React, { createContext, useState } from "react";

interface iUser{
  optionPicked:  { localColor: string, imgSrc: string, id: number};
}
interface iResult{
  winner: number,
  info: string
}
interface IGameContext {
  user: iUser;
  house: iUser;
  result: iResult;
  score: number;
  handleUserOption: (optionPickedByUser: number) => void;
  verifyWinner: (userOption: number, houseOption: number) => void;
  handleHouseOption: ()=> void
}

const initialValue = {
  user: {optionPicked: { localColor: "", imgSrc: "", id: -1}},
  house: {optionPicked: { localColor: "", imgSrc: "", id: 0}},
  score: 0,
  result: {
    winner: -1,
    info: ""
  },
  handleUserOption: () => {},
  verifyWinner: () => {},
  handleHouseOption: ()=>{}
};

interface IProps {
  children: React.ReactNode;
}

export const GameContext =
  createContext<IGameContext>(initialValue);

export const GameContextProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<iUser>({optionPicked: { localColor: "", imgSrc: "", id: -1}});
  const [house, setHouse] = useState<iUser>({optionPicked: { localColor: "", imgSrc: "", id: 0}});
  const [result, setResult] = useState<iResult>({winner: 0, info: ""});
  const [score, setScore] = useState(0);

  const handleUserOption = (optionPickedByUser: number) => {
    const userOption = { localColor: "", imgSrc: "", id: optionPickedByUser}; 
    switch (optionPickedByUser) {
      case 1:
        userOption.localColor = "hsl(230, 89%, 62%)";
        userOption.imgSrc = "/images/icon-paper.svg";
        break;
      case 2:
        userOption.localColor = "hsl(39, 89%, 49%)";
        userOption.imgSrc = "/images/icon-scissors.svg";
        break;
      case 3:
        userOption.localColor = "hsl(349, 71%, 52%)";
        userOption.imgSrc = "/images/icon-rock.svg";
        break;

      default: 
      userOption.localColor = "";
      userOption.imgSrc = "";
    }
    
    setUser({optionPicked: userOption});
    const randomHouseOption = handleHouseOption();

    verifyWinner(optionPickedByUser, randomHouseOption);

  };
  
  const handleHouseOption = ()=>{
    const randomOption = Math.floor((Math.random() * 3) +1);
    const houseOption = { localColor: "", imgSrc: "", id: randomOption}; 
    switch (randomOption) {
      case 1:
        houseOption.localColor = "hsl(230, 89%, 62%)";
        houseOption.imgSrc = "/images/icon-paper.svg";
        break;
      case 2:
        houseOption.localColor = "hsl(39, 89%, 49%)";
        houseOption.imgSrc = "/images/icon-scissors.svg";
        break;
      case 3:
        houseOption.localColor = "hsl(349, 71%, 52%)";
        houseOption.imgSrc = "/images/icon-rock.svg";
        break;
    }
    setHouse({optionPicked: houseOption});
    return randomOption;
  };

  function verifyWinner(userOption: number, houseOption: number){
    if(userOption === -1) return;
    if(userOption === houseOption ) {
      setResult({winner: 0,info:"TIE"});
      return;
    }
    if(userOption === 1 && houseOption ===2) {
      setResult({winner: 2,info:"YOU LOSE"}); 
      setScore(0);
      return;
    }
    if(userOption === 2 && houseOption ===3){
      setResult({winner: 2,info:"YOU LOSE"});
      setScore(0);
      return;
    };
    if(userOption === 3 && houseOption ===1) {
      setResult({winner: 2,info:"YOU LOSE"});
      setScore(0);
      return;
    };
    
    setResult({winner: 1,info:"YOU WIN"});
    setScore(score+1);
    return;
  }

  return (
    <GameContext.Provider value={{ user, handleUserOption, house,handleHouseOption,  result, verifyWinner, score }}>
      {children}
    </GameContext.Provider>
  );
};
