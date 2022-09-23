import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    gap: 30px;
    position: relative;
`

export const RulesContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button{
        font-size: 32px;
        padding: 5px;
        border-radius: 8px;
        background-color: transparent;
        cursor: pointer;
    }
`