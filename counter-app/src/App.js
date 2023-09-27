import { useState } from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Button from "./components/Button";

const StyledH1 = styled.h1`
    font-family: "Open Sans", sans-serif;
    font-weight: 800;
    font-size: 128px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    margin-top: 200px;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
`;

function App() {
    const [counter, setCounter] = useState(0);
    return (
        <div className="App">
            <GlobalStyles />
            <StyledH1>{counter}</StyledH1>
            <StyledButtonContainer>
                <Button
                    value="+"
                    counter={counter}
                    setCounter={setCounter}
                    color="#65cce5"
                ></Button>
                <Button
                    value="-"
                    counter={counter}
                    setCounter={setCounter}
                    color="#ed3675"
                ></Button>
            </StyledButtonContainer>
        </div>
    );
}

export default App;
