import styled from "styled-components";

interface iOption {
  color: string;
  size: string;
}

interface iOptionContainer {
  width: string;
}

export const OptionsContainer = styled.div<iOptionContainer>`
  width: ${(props) => `${props.width}`};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: relative;
  gap: 20px;
  .options {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .user-option,
  .house-option,
  .game-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .user-option {
    animation: slide-left 0.5s linear;
  }
  .house-option {
    animation: slide-right 0.5s linear;
  }

  .user-option.winner::before,
  .house-option.winner::before {
    content: "";
    z-index: -1;
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-image: radial-gradient(hsla(108, 10%, 91%, 0.002), hsla(108, 10%, 91%, 0.05));
    animation: scale-up-center 0.9s ease-in-out;

    @media (max-width: 688px) {
      width: 200px;
      height: 200px;
    }
    @keyframes scale-up-center {
      0% {
        transform: scale(0.5);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  .game-result {
    z-index: 3;
    animation: slide-top 0.5s linear;
    h2 {
      font-size: 3.2em;
    }
    gap: 20px;
    button {
      padding: 20px 60px;
      border-radius: 8px;
      border: 0px;
      cursor: pointer;
      span {
        color: hsl(229, 25%, 31%);
      }
    }
  }

  @keyframes slide-right {
    0% {
      transform: translateX(25px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slide-left {
    0% {
      transform: translateX(-25px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slide-top {
    0% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 688px) {
    width: 100%;
    display: grid;
    grid-template-areas:
      "one two"
      "three three";

    grid-row-gap: 20px;
    grid-column-gap: 10px;
    .user-option,
    .house-option,
    .game-result {
      h2 {
        font-size: 1.2em;
      }
    }
    .user-option {
      grid-area: one;
    }
    .house-option {
      grid-area: two;
    }
    .game-result {
      h2 {
        font-size: 52px;
      }
      gap: 0px;
      grid-area: three;
    }
  }
`;

export const Option = styled.div<iOption>`
  width: ${(props) => `${props.size}`};
  height: ${(props) => `${props.size}`};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: ${(props) => `18px solid ${props.color}`};
  background-color: white;
  box-shadow: inset 1px 8px 3px 2px rgba(79, 79, 79, 0.44);
  cursor: pointer;
  img {
    width: 50%;
  }
  :hover {
    border-color: hsl(189, 59%, 53%);
  }

  @media (max-width: 688px) {
    width: 150px;
    height: 150px;
  }
`;
