import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";
import styled, { keyframes } from "styled-components";

const SubBtn = styled.button`
    background: ${(props) => props.bg};
    color: ${(props) => (props.bg === "blue" ? "white" : "black")};
    padding: 10px;
`;

const MainBtn = styled(SubBtn)`
    border-radius: 30px;
    font-size: 25px;
    border: none;
`;

const MainBox = styled.div`
    background: gray;
    padding: 20px;
`;

const Ani = keyframes`
    50%{
        transform: scale(1.3);
    }
`;

const AniBtn = styled(SubBtn)`
    border-radius: 5px;
    animation: ${Ani} 1s infinite;
`;

function App() {
    return (
        <div className="App">
            <MainBox>
                <SubBtn bg="red">버튼</SubBtn>
                <MainBtn bg="green">버튼</MainBtn>
                <SubBtn bg="blue">버튼</SubBtn>
                <AniBtn bg="lightblue">버튼</AniBtn>
            </MainBox>
        </div>
    );
}

export default App;
