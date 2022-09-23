import styled from "styled-components";

export const ContainerTitleAndScore = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid white;
  border-radius: 12px;
  padding: 20px;

  @media (max-width: 688px) {
    width: 80%;
    padding: 10px;
  }
`;
