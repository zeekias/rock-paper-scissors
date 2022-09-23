import styled from "styled-components";

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 12px;
  padding: 20px;
  height: 100%;
  width: 20%;
  background-color: white;
  h2 {
    font-size: 4.5em;
    color: hsl(229, 25%, 31%);
  }
  span {
    color: hsl(229, 64%, 46%);
    letter-spacing: 0.2em;
  }

  @media (max-width: 688px) {
    padding: 5px;
    width: 40%;
    h2 {
      font-size: 3.5em;
    }
  }
`;
