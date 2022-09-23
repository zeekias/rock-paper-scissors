import styled, { keyframes } from "styled-components";

export const RulesContent = styled.div`
  animation: slide-fwd-tl 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  width: 30%;
  height: 50%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: fixed;
  top: auto;
  right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  visibility: visible;
  z-index: 99;
  h2 {
    font-size: 32px;
    color: hsl(229, 25%, 31%);
  }
  img {
    height: 50%;
  }
  button {
    border: 0px;
    padding: 10px;
    font-size: 42px;
    color: hsl(229, 25%, 31%);
    background-color: transparent;
    cursor: pointer;
  }

  @media (max-width: 688px) {
    width: 100%;
    height: 100%;
    gap: 80px;
    position: fixed;
    top: auto;
    right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    visibility: visible;

    img {
      height: 35%;
    }
  }

  @keyframes slide-fwd-tl {
  0% {
            transform: translateZ(-160px) translateY(100px) translateX(260px);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
            transform: translateZ(160px) translateY(0px) translateX(0px);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}

`;
